import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  // {
  //   firstname: "Droid",
  //   lastname: "GameZZ",
  //   age: 24,
  // },
  // {
  //   firstname: "Zohaib",
  //   lastname: "Ali",
  //   age: 13,
  // },
];

// Get all users
router.get("/", (req, res) => {
  console.log(users);
  // res.send("Hello");
  res.json({ length: users.length, users: users });
});

// Create a user
router.post("/", (req, res) => {
  const user = req.body;
  user.id = uuidv4();
  users.push(user);
  res.json({ message: "success", user: user });
});

// Get user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => {
    if (user.id === id) {
      return user;
    }
  });
  res.json({ user: foundUser });
});

// Delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => {
    if (user.id !== id) {
      return user;
    }
  });
  res.json(users);
});

// Update a user
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const userToUpdate = users.find((user) => user.id == id);
  const updatedUser = { ...userToUpdate, ...req.body };
  res.send({ updatedUser });
  // console.log(userToUpdate);
});
export default router;
