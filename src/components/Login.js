import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);
            setMessage("✅ Login successful!");
            navigate("/dashboard");

        } catch (error) {
            console.error("Login error:", error.message);
            setMessage("❌ Error: " + error.message);
        }
    };

    return (
        <div className="form-container">
            <h2>🔑 Login</h2>
            {message && <p style={{ color: message.includes("✅") ? "green" : "red" }}>{message}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="📧 Enter your email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="🔒 Enter your password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="button login-button" type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign up here</a>
            </p>
        </div>
    );
}

export default Login;
