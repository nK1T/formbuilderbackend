# Form Builder Application - Backend

This is the backend service for the **Form Builder Application**, built using **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API for managing forms and their inputs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

- Create, read, update, and delete forms.
- Store form inputs with various types (text, number, email, etc.).
- Secure and scalable database integration with MongoDB.

---

## Technologies Used

- **Node.js**: Runtime for the backend.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing forms and inputs.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: For environment variable management.

---

## Setup Instructions

### Prerequisites

- Node.js (>=14.x.x)
- MongoDB (local instance or Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. Install Dependencies:

   ```bash
   npm install

3. Configure Environment Variables:

   # Create a .env file in the root directory and add the following configuration:
   ```plaintext
   PORT=5000
   MONGO_URI=your-mongodb-uri-here

4. Start the server:

   ```bash
   npm run dev
