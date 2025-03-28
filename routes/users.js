import express from "express";
import {
  createUser,
  getUsers,
  getUserbyId,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

// Get all users
router.get("/", getUsers);

// Create a user
router.post("/", createUser);

// Get user by ID
router.get("/:id", getUserbyId);

// Delete user
router.delete("/:id", deleteUser);

// Update a user
router.patch("/:id", updateUser);

export default router;
