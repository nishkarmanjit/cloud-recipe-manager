import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully:", userCredential.user);
            setMessage("✅ User signed up successfully! ");
        } catch (error) {
            console.error("Error signing up:", error.message);
            setMessage("❌ Error: " + error.message);
        }
    };

    return (
        <div className="form-container">
            <h2>🔐 Sign Up</h2>
            {message && <p style={{ color: message.includes("✅") ? "green" : "red" }}>{message}</p>}
            <form onSubmit={handleSignup}>
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
                    placeholder="🔑 Enter your password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="button signup-button" type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default Signup;
