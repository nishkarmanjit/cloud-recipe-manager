# 🍽️ Cloud-Based Recipe & Grocery Manager

## 📌 1. Project Description

The **Cloud-Based Recipe & Grocery Manager** is a web-based application that allows users to store, manage, and organize their favorite recipes while automatically generating shopping lists based on selected recipes. This application is beneficial for food enthusiasts, students, and home cooks who want to streamline their grocery shopping and meal planning.

## 📜 Revision History

| Date       | Comment        | Author               |
|------------|---------------|----------------------|
| 2025-03-23 | Initial version of README file  | Nishkarmanjit Kaur  |
| 2025-03-25 | Started on the feature   | Nishkarmanjit Kaur  |

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

### 📌 6.1 User Interface Design Overview
The Cloud-Based Recipe & Grocery Manager features an intuitive user interface designed to provide seamless navigation and accessibility. Below are the high-level UI requirements:
- **User-Friendly Design**: Clean, minimalistic UI for easy interaction.
- **Responsiveness**: Adaptable for desktop and mobile users.
- **Visual Aids**: Recipe images, categorized views, and ingredient tagging.
- **Accessibility**: Easy-to-read fonts, proper color contrast, and keyboard navigation support.

### 🖼 Mockups:
[📊 View System Architecture](https://raw.githubusercontent.com/nishkarmanjit/cloud-recipe-manager/main/public/system-architecture.png)

### 🔄 6.2 User Interface Navigation Flow
The navigation flow between different screens is as follows:

- **Login Page ➝ Recipe Dashboard** (Upon successful authentication)
- **Recipe Dashboard ➝ Recipe Detail Page** (On recipe selection)
- **Recipe Detail Page ➝ Grocery List Page** (When generating a shopping list)
- **Grocery List Page ➝ Back to Recipe Dashboard** (For more selections)

Here is the **Navigation Flow Diagram**:

![Navigation Flow Diagram](ui_navigation_flow.png)

### 📌 6.3 Use Cases / User Function Description

#### 🔑 Login Page
- **User Action**: Enter credentials and authenticate.
- **System Response**: Validates input and redirects to the Recipe Dashboard.

#### 📋 Recipe Dashboard
- **User Action**: View saved recipes and search by category.
- **System Response**: Displays the list of stored recipes with filtering options.

#### 📖 Recipe Detail Page
- **User Action**: View detailed instructions and ingredients.
- **System Response**: Shows recipe details with an option to generate a grocery list.

#### 🛍 Grocery List Page
- **User Action**: View auto-generated shopping list.
- **System Response**: Displays required ingredients and allows editing before shopping.

---
