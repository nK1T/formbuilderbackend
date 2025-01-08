const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');
const formRoutes = require('./src/routes/formRoutes');

dotenv.config();

const app = express();
connectDB();  // Connect to MongoDB

app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

//  routes
app.use('/api', formRoutes);

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
