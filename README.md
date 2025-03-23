# 🍽️ Cloud-Based Recipe & Grocery Manager

## 📌 1. Project Description

The **Cloud-Based Recipe & Grocery Manager** is a web-based application that allows users to store, manage, and organize their favorite recipes while automatically generating shopping lists based on selected recipes. This application is beneficial for food enthusiasts, students, and home cooks who want to streamline their grocery shopping and meal planning.

## 🌟 2. Overview

### ✅ Features Included:
- 🔐 **User Authentication**: Secure login system for personalized access.
- 📖 **Recipe Storage**: Upload, store, and categorize recipes.
- 🥦 **Ingredient Management**: List ingredients per recipe.
- 🛒 **Grocery List Generator**: Auto-create shopping lists based on selected recipes.
- ☁️ **Cloud Storage**: Store text, images, and recipe videos.
- 🔍 **Search and Filter**: Find recipes by cuisine, ingredients, or dietary preferences.

### ❌ Features Excluded:
- 🤖 AI-based recipe recommendations.
- 📲 Social media integration.

## 🏗️ 3. System Architecture

The system follows a client-server architecture with cloud storage integration.

```
Frontend (React.js) --> Backend (Node.js/Python) --> Database (Firebase Firestore)
                    --> Cloud Storage (AWS S3 for images/videos)
```

**🛠 Technologies Used:**
- 🎨 **Frontend**: React.js / Next.js
- 🚀 **Backend**: Python (Flask) or Node.js (Express.js)
- 🗄 **Database**: Firebase Firestore / AWS DynamoDB
- ☁️ **Cloud Storage**: AWS S3
- 🛠 **Tools**: GitHub, Postman, Google Vision API (optional image-to-text conversion)

## 📊 4. Data Dictionary

| 🏷 Field Name   | 🛠 Data Type | 📋 Description |
|---------------|----------|-------------|
| 🆔 user_id       | String   | Unique ID for each user |
| 🥘 recipe_id     | String   | Unique ID for each recipe |
| 🍲 recipe_name   | String   | Name of the recipe |
| 🛍 ingredients   | Array    | List of ingredients |
| 📜 instructions  | String   | Step-by-step cooking instructions |
| 🖼 image_url     | String   | URL of the recipe image |
| 🛒 grocery_list  | Array    | Auto-generated shopping list |

## 🗃 5. Data Design

### 👤 User Table
```
user_id (String, Primary Key)
email (String, Unique)
password_hash (String)
recipes (Array of recipe_id)
```

### 🍽 Recipe Table
```
recipe_id (String, Primary Key)
user_id (String, Foreign Key)
recipe_name (String)
ingredients (Array)
instructions (String)
image_url (String)
grocery_list (Array)
```

## 🎨 6. User Interface Design

### 🖼 Diagram:
![User Interface Diagram](path/to/your/diagram.png)

1. **🔑 Login Page**: Users enter credentials to access their account.
2. **📋 Recipe Dashboard**: Display saved recipes with images and descriptions.
3. **📖 Recipe Detail Page**: Shows full recipe details and an option to generate a grocery list.
4. **🛍 Grocery List Page**: Displays an auto-generated shopping list based on selected recipes.

---


