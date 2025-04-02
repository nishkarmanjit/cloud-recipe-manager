import React, { useState } from "react";
import { getIngredients } from "../aws/dynamoService";

const GroceryList = () => {
    const [selected, setSelected] = useState("");
    const [list, setList] = useState([]);

    const handleGenerate = async () => {
        if (selected) {
            const ingredients = await getIngredients(selected);
            setList(ingredients);
        }
    };

    return (
        <div style={styles.container}>
            <h2>🧾 Grocery List Generator </h2>

            <select onChange={(e) => setSelected(e.target.value)} style={styles.select}>
                <option value="">Select a Recipe</option>
                <option value="Pasta">🍝 Pasta</option>
                <option value="Pizza">🍕 Pizza</option>
                <option value="Salad">🥗 Salad</option>
                <option value="Butter Chicken">🍗 Butter Chicken</option>
                <option value="Veg Biryani">🍚 Veg Biryani</option>
                <option value="Tacos">🌮 Tacos</option>
                <option value="New York Cheesecake">🍰 New York Cheesecake</option>
                <option value="Strawberry Milkshake">🍓 Strawberry Milkshake</option>
                <option value="Apple Pie">🥧 Apple Pie</option>
                <option value="Nachos with Salsa">🌶️ Nachos with Salsa</option>
                <option value="Veg Sandwich">🥪 Veg Sandwich</option>
                <option value="Samosa">🥟 Samosa</option>
            </select>

            <button onClick={handleGenerate} style={styles.button}>Generate List</button>

            {list.length > 0 && (
                <div style={styles.resultBox}>
                    <h3>🛒 Ingredients You'll Need:</h3>
                    <ul style={styles.list}>
                        {list.map((item, index) => (
                            <li key={index}>✅ {item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        fontFamily: "Arial",
        padding: "50px",
        minHeight: "100vh",
        backgroundImage: "url('/grocery-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "lighten",
    },
    select: {
        padding: "10px",
        fontSize: "1rem",
        marginRight: "10px",
        marginBottom: "20px",
        marginTop: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "30px",
    },
    resultBox: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "20px 30px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "inline-block",
        marginTop: "30px",
    },
    list: {
        listStyleType: "disc",
        paddingLeft: "20px",
        textAlign: "left",
        marginTop: "15px",
        fontSize: "1.1rem",
    }

};

export default GroceryList;
