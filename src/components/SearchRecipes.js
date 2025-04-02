import React, { useState } from "react";
import { GetItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
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
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setError("");
        setRecipe(null);

        if (!searchTerm) return;

        try {
            const command = new GetItemCommand({
                TableName: tableName,
                Key: {
                    recipeName: { S: searchTerm },
                },
            });

            const response = await dbClient.send(command);

            if (response.Item) {
                const item = unmarshall(response.Item);
                setRecipe(item);
            } else {
                setError("Recipe not found!");
            }
        } catch (err) {
            console.error("Search error:", err);
            setError("Failed to search recipe.");
        }
    };

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>🔍 Search Recipes</h2>
            <input
                type="text"
                placeholder="Enter recipe name (e.g., Pasta)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "10px", width: "300px", marginRight: "10px" }}
            />
            <button onClick={handleSearch} style={{ padding: "10px 20px", fontWeight: "bold" }}>
                Search
            </button>

            {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

            {recipe && (
                <div style={{ marginTop: "30px" }}>
                    <h3>{recipe.recipeName}</h3>
                    <h4>🧾 Ingredients:</h4>
                    <ul>
                        {recipe.ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchRecipes;
