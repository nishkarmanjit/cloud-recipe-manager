import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const containerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "50px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "#ff6600",
        marginBottom: "10px",
    };

    const quoteStyle = {
        fontSize: "1.2rem",
        fontStyle: "italic",
        color: "#555",
        marginBottom: "20px",
    };

    const buttonContainer = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
    };

    const buttonStyle = {
        textDecoration: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "1.2rem",
        color: "white",
        backgroundColor: "#007bff",
        transition: "0.3s",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>🍽️ Welcome to Recipe & Grocery Manager 🛒</h1>
            <p>Get started by signing up or logging in. 🚀</p>
            <p style={quoteStyle}>
                "Cooking is an art, but all art requires knowing something about the techniques and materials." – Nathan Myhrvold
            </p>
            <div style={buttonContainer}>
                <Link to="/signup" style={buttonStyle}>🔐 Signup</Link>
                <Link to="/login" style={{ ...buttonStyle, backgroundColor: "#28a745" }}>🔑 Login</Link>
            </div>
        </div>
    );
}

export default Home;
