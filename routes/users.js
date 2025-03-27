import express from "express";

const router = express.Router();

const users = [
  {
    firstname: "Droid",
    lastname: "GameZZ",
    age: 24,
  },
  {
    firstname: "Zohaib",
    lastname: "Ali",
    age: 13,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  // res.send("Hello");
  res.json({ length: users.length, users: users });
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.json({ message: "success", user: req.body });
});

export default router;
