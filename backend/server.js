import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import subscriptionRouter from "./routes/newsLetterRoute.js";

const allowedOrigins = [
  "https://localhost:5173",
  "https://vicel-pharmacy.vercel.app",
];
// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares

app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// api endpoints for user
app.use("/api/user", userRouter);

// api endpoints for products
app.use("/api/product", productRouter);

// cart endpoint
app.use("/api/cart", cartRouter);
// order end point
app.use("/api/order", orderRouter);
app.use("/api/news-letter", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log("Server running on port : " + port);
});
