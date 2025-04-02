import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Dashboard() {
    return (
        <div className="shared-page-container" style={{
            background: `url("/dashboard.jpg") center center / cover no-repeat`,
            minHeight: '100vh',
        }}>
            <h1 className="home-title">👋 Welcome Back!</h1>
            <p className="home-subtext">Explore your recipes, grocery list, and more 🍅🧄🛒</p>

            <div className="home-links">
                <Link to="/upload">📤 Upload Recipe</Link>
                <Link to="/grocery" className="login-btn-home">🧾 Grocery List</Link>
                <Link to="/search" style={{ backgroundColor: "#ffc107" }}>
                    🔍 Search Recipes
                </Link>

            </div>
        </div>
    );
}

export default Dashboard;
