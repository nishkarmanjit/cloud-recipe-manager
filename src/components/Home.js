import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div className="shared-page-container" style={{
            background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("/food-bg.jpg") center center / cover no-repeat`,
            minHeight: '100vh',
        }}>
            <h1 className="home-title">🍽️ Welcome to Recipe & Grocery Manager 🛒</h1>
            <p className="home-subtext">Get started by signing up or logging in. 🚀</p>

            <p className="quote-style">
                "Cooking is an art, but all art requires knowing something about the techniques and materials." – Nathan Myhrvold
            </p>

            <div className="home-links">
                <Link to="/signup">🔐 Signup</Link>
                <Link to="/login" className="login-btn-home">🔑 Login</Link>
            </div>
        </div>
    );
}

export default Home;
