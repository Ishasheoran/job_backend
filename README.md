# 🛠️ Student Job Tracker – Backend

This is the **Node.js/Express.js** backend for the Student Job Tracker app. It handles CRUD operations on job entries using a MongoDB database.

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- CORS, dotenv (optional)

## 📁 Routes

Base Route: `/api/jobs`

| Method | Endpoint        | Description            |
|--------|------------------|------------------------|
| GET    | `/`              | Fetch all job entries  |
| POST   | `/`              | Add a new job          |
| PUT    | `/:id`           | Update job status      |
| DELETE | `/:id`           | Delete a job           |

## 🧱 File Structure

- `jobSchema.js` – Defines the `Job` model with fields:
  - `company`, `role`, `status`, `date`, `link`
- `jobRouter.js` – Contains all job-related routes
- `app.js` –  Entry point that connects Express to MongoDB and uses the job router.

## ⚙️ Setup Instructions

```bash
cd backend
npm install
npm start  
