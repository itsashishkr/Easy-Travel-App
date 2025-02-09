// Import dependencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Import routes
import authRoute from "./router/auth.js";
import tourRoute from "./router/tours.js";
import userRoute from "./router/users.js";
import reviewRoute from "./router/review.js";
import bookingRoute from "./router/bookings.js";
import searchRoute from "./router/Search.js";
import contactRoute from "./router/contact.js";
import blogRoute from "./router/blog.js";
import commentRoute from "./router/comment.js";

// Initialize environment variables
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(cookieParser());

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};
app.use(cors(corsOptions));

// Root route for testing
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// MongoDB configuration
mongoose.set("strictQuery", false); 
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}


// Route middlewares
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/search", searchRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/blogs", blogRoute);
app.use("/api/v1/comment", commentRoute);

// Start the server
app.listen(port, () => {
  connectDB(); // Connect to the database
  console.log(`Server is running on http://localhost:${port}`);
});
