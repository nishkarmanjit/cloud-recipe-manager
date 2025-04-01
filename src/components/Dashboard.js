import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div style={{
            textAlign: "center",
            padding: "60px",
            fontFamily: "Arial",
            background: "#fffdf7",
            minHeight: "100vh"
        }}>
            <h1 style={{
                color: "#d62828",
                fontSize: "2.5rem",
                marginBottom: "20px"
            }}>
                🛒 Hello, Foodie! Welcome to Your Dashboard
            </h1>
            <p>🎉 You are now logged in!</p>

            <div style={{ marginTop: "30px" }}>
                <Link to="/upload" style={btn("orange")}>📤 Upload Recipe Image</Link>
                <Link to="/grocery" style={btn("green")}>🧾 Generate Grocery List</Link>
            </div>
        </div>
    );
};

const btn = (color) => ({
    display: "inline-block",
    margin: "10px",
    padding: "12px 24px",
    borderRadius: "8px",
    backgroundColor: color === "green" ? "#28a745" : "#f77f00",
    color: "white",
    fontSize: "1rem",
    textDecoration: "none",
    fontWeight: "bold",
});

export default Dashboard;
