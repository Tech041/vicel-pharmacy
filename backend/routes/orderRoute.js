import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
// Not available in NIGERIA
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// user feature
orderRouter.post("/userorders", authUser, userOrders);

// Verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
