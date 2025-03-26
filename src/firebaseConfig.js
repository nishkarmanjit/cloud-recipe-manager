// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration from Project Settings
const firebaseConfig = {
    apiKey: "AIzaSyAIi8j3CpQwGCz8mFWAwShnXOZINMb9bgQ",
    authDomain: "recipe-grocery-manager.firebaseapp.com",
    projectId: "recipe-grocery-manager",
    storageBucket: "recipe-grocery-manager.firebasestorage.app",
    messagingSenderId: "373558919920",
    appId: "1:373558919920:web:7252f87bad63d5216a7835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication instance
export const auth = getAuth(app);
export default app;
