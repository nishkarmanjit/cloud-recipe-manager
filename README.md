# 🍽️ Cloud-Based Recipe & Grocery Manager

## 🧩 Section 1 - Project Description

### 1.1 Project
**Cloud-Based Recipe & Grocery Manager**

### 1.2 Description
A cloud-powered web application that allows users to register, log in, upload and view recipe images, generate grocery lists, and store recipe-related data securely using AWS services.

### 1.3 Revision History
| Date       | Comment                                                        | Author               |
|------------|----------------------------------------------------------------|----------------------|
| 2025-03-23 | Initial version of README file                                 | Nishkarmanjit Kaur   |
| 2025-03-25 | Started on the feature                                          | Nishkarmanjit Kaur   |
| 2025-03-30 | Initial project creation and Firebase login added              | Nishkarmanjit Kaur   |
| 2025-03-31 | AWS S3 image upload + Grocery list via DynamoDB               | Nishkarmanjit Kaur   |
| 2025-04-01 | Implemented Search Recipes feature using DynamoDB              | Nishkarmanjit Kaur   |
| 2025-04-02 | Enhanced UI with background images and styled result displays  | Nishkarmanjit Kaur   |
| 2025-04-02 | Added diagrams and polished README with architectural mapping  | Nishkarmanjit Kaur   |

---

## 🧾 Section 2 - Overview

### 2.1 Purpose
This module focuses on implementing user login, image upload to AWS S3, and grocery list generation using DynamoDB. It is intended for developers and evaluators reviewing the cloud functionality.

### 2.2 Scope
This module covers:
- User Authentication
- Recipe image upload to S3
- Grocery list generation via DynamoDB
- UI navigation & display

### 2.3 Requirements

#### 2.3.1 Functional Requirements
- R1: The system shall allow users to log in using email and password.
- R2: The system shall allow users to upload recipe images to AWS S3.
- R3: The system shall allow users to generate grocery lists from selected recipes.

#### 2.3.2 Non-Functional Requirements
- **Performance**: Should handle image uploads within 2 seconds on average.
- **Reliability**: 99.9% uptime via AWS services.

#### 2.3.3 Technical Requirements
- **Frontend**: React.js
- **Cloud Storage**: AWS S3
- **Database**: AWS DynamoDB
- **Authentication**: Firebase Auth

#### 2.3.4 Security Requirements
- **Authentication**: Only logged-in users can upload/view content.
- **Data Encryption**: AWS handles encryption in transit and at rest.

#### 2.3.5 Estimates
| # | Description                                         | Hrs. Est. |
|---|-----------------------------------------------------|-----------|
| 1 | User Login Integration with Firebase               | 2 hrs     |
| 2 | AWS S3 Upload Component + UI                       | 3 hrs     |
| 3 | Grocery List from DynamoDB                         | 3 hrs     |
| 4 | Recipe Search with Partial Match                   | 2 hrs     |
| 5 | UI Styling & Animations                            | 2 hrs     |
|   | **TOTAL**                                           | **12 hrs**|

#### 2.3.6 Traceability Matrix
| SRS Requirement | SDD Module                         |
|------------------|-------------------------------------|
| Req 1            | Login.js (Section 6.3)             |
| Req 2            | ImageUploader.js (Section 6.3)     |
| Req 3            | GroceryList.js (Section 6.3)       |
| Req 4            | SearchRecipes.js (Section 6.3)     |

---

## 🏗️ Section 3 - System Architecture

### 3.1 Overview
The system uses a client-side React frontend. Firebase handles user authentication, AWS S3 stores uploaded images, and AWS DynamoDB retrieves ingredients to generate grocery lists.

### 3.2 Architectural Diagrams

#### 🌐 System Architecture Diagram
![System Architecture](./public/system-architecture.png)

#### 🔄 Sequence Diagram
![Sequence Diagram](./public/sequence-diagram.png)

---

## 📚 Section 4 - Data Dictionary

| Table         | Field         | Notes                       | Type     |
|---------------|---------------|-----------------------------|----------|
| Users         | userId        | Firebase UID                | String   |
| Recipes       | recipeName    | Key name of recipe          | String   |
|               | ingredients   | List of grocery items       | List     |

---

## 🗃️ Section 5 - Data Design

### 5.1 Persistent / Static Data

#### 5.1.1 Dataset - DynamoDB Recipes Table

**Entity: Recipe**
- Attributes:
  - recipeName (PK)
  - ingredients (List of Strings)

**Example:**
```json
{
  "recipeName": "Pasta",
  "ingredients": ["Penne", "Tomato Sauce", "Garlic", "Olive Oil"]
}
```

---

## 🎨 Section 6 - User Interface Design

### 6.1 User Interface Design Overview
- 🎨 Clean, responsive layout
- ✨ Styled image uploader with animation
- 🧾 Dropdown to generate grocery list from recipes
- 🔍 Partial match recipe search
- 📱 Optimized for desktop and mobile


### 6.2 User Interface Navigation Flow
![Navigation Flow](./public/ui-navigation-flow.png)

**Flow:**
- `/` → Welcome Page
- `/signup` → Register Page
- `/login` → Login Page
- `/dashboard` → User Home
- `/upload` → Upload Image
- `/grocery` → Generate Grocery List
- `/search` → Search Recipes

### 6.3 Use Cases / User Function Description

#### 🔐 Login Page
- Enter credentials → Authenticates via Firebase
- Redirects to `/dashboard`

#### 📤 Image Uploader
- Upload file → Stores image to AWS S3
- Shows preview with file name, size, and animation

#### 🧾 Grocery List
- Select recipe → Fetch ingredients from DynamoDB
- Display as a bullet list

#### 🔍 Search Recipes
- Type partial recipe name → Search DynamoDB
- Display results with clean card layout

---


