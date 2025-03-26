import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formStyle = {
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    };

    const inputStyle = {
        width: "90%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ddd",
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return (
        <div style={formStyle}>
            <h2>🔑 Login</h2>
            <input
                type="email"
                placeholder="📧 Enter your email"
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="🔒 Enter your password"
                style={inputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button style={buttonStyle}>Login</button>
            <p>
                Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
        </div>
    );
}

export default Login;
