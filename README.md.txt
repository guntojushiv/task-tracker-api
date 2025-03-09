# 📘 Task Tracker API

A simple and efficient **Task Tracker API** built with **Node.js**, **Express.js**, and **MongoDB** to manage tasks — perfect for learning and small-scale projects!

---

## 🚀 **Features**

- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks.
- 📂 **RESTful API Design**.
- 🛠 **Error Handling & Validation**.
- 🧩 **Modular & Scalable Structure**.
- 🔧 **Environment Configuration** with `.env`.

---

## 🏗️ **Folder Structure**

```
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🛠️ **Installation & Setup**

1. **Clone the Repository:**

```bash
git clone https://github.com/your-username/task-tracker-api.git
cd task-tracker-api
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Set Up Environment Variables:**

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

4. **Start the Server:**

```bash
node server.js
```

The server will run on: `http://localhost:3000`

---

## 🔌 **API Endpoints**

| Method | Endpoint      | Description         |
|--------|---------------|---------------------|
| **GET**    | `/api/tasks`      | Get all tasks         |
| **GET**    | `/api/tasks/:id`  | Get a single task     |
| **POST**   | `/api/tasks`      | Create a new task     |
| **PUT**    | `/api/tasks/:id`  | Update a task         |
| **DELETE** | `/api/tasks/:id`  | Delete a task         |


### 🟩 **Example Task Object:**

```json
{
    "title": "Complete project",
    "description": "Finish the API and test it in Postman",
    "status": "pending"
}
```

---

## 🧪 **Testing with Postman**

1. **Import API Endpoints:** Manually add or import the endpoints.
2. **Send Requests:** Test each route (GET, POST, PUT, DELETE).
3. **Check Responses:** Validate the response structure and status codes.

---

## ⚡ **Deployment**

1. **Push Code to GitHub:**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Render/Heroku:**

- Connect GitHub repo.
- Set environment variables.
- Deploy and test live API.

---

## 🤝 **Contributing**

1. Fork the repository.
2. Create a new branch.
3. Commit and push changes.
4. Create a pull request.

---

## 🛡️ **License**

This project is licensed under the MIT License.

---

## 🚀 **Author**

**Shiva** — Passionate Developer and Problem Solver. 🙌

LinkedIn: https://www.linkedin.com/in/shiva-guntoju-944144241/ 
---

