const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./Route/productRoutes');
const userRoutes = require('./Route/userRoutes');
const cartRoutes = require('./Route/cartRoutes');
const orderRoutes = require('./Route/orderRoutes');

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://Kamali:kamali_445@cluster0.qxlvbz0.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0",
).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Enable CORS for all routes
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', cartRoutes);
app.use('/', orderRoutes);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
