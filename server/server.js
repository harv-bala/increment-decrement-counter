import express from "express";
import cors from "cors";
import counter from "./api/counter.route.js";

// Using express to create our server
const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());

// Initial routes
app.use("/api/v1/counter", counter);

// Handle calls to routes that don't exist (hence 404 Not Found error)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

// Export the app as a module
export default app;