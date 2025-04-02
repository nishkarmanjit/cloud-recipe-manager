import React, { useState } from "react";
import { ScanCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const dbClient = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
});

const tableName = "Recipes";

function SearchRecipes() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setError("");
        setResults([]);

        if (!searchTerm) return;

        try {
            const command = new ScanCommand({
                TableName: tableName,
                FilterExpression: "contains(recipeName, :name)",
                ExpressionAttributeValues: {
                    ":name": { S: searchTerm },
                },
            });

            const response = await dbClient.send(command);

            if (response.Items.length > 0) {
                const recipes = response.Items.map((item) => unmarshall(item));
                setResults(recipes);
            } else {
                setError("No matching recipes found.");
            }
        } catch (err) {
            console.error("Search error:", err);
            setError("Something went wrong while searching.");
        }
    };

    return (
        <div style={{
            padding: "40px",
            textAlign: "center",
            minHeight: "100vh",
            backgroundImage: "url('/search-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backgroundBlendMode: "lighten",
        }}>
            <h2>🔍 Search Recipes</h2>
            <input
                type="text"
                placeholder="Type part of a recipe name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "10px", width: "300px", marginRight: "10px" }}
            />
            <button onClick={handleSearch} style={{ padding: "10px 20px", fontWeight: "bold" }}>
                Search
            </button>

            {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

            {results.length > 0 && (
                <div style={{ marginTop: "30px" }}>
                    {results.map((recipe, idx) => (
                        <div
                            key={idx}
                            style={{
                                border: "2px solid #ffa94d",
                                borderRadius: "10px",
                                backgroundColor: "#f1f8e9",
                                padding: "15px",
                                marginBottom: "20px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                maxWidth: "600px",
                                margin: "20px auto",
                                transition: "0.3s",
                                cursor: "pointer",

                            }}
                        >
                            <h3 style={{ color: "#ff6600" }}>{recipe.recipeName}</h3>
                            <h4>🧾 Ingredients You'll Need:</h4>
                            <ul style={{ textAlign: "left" }}>
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchRecipes;
