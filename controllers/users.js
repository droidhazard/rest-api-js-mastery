import express from "express";
import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  user.id = uuidv4();
  users.push(user);
  res.json({ message: "success", user: user });
};

export const getUsers = (req, res) => {
  console.log(users);
  // res.send("Hello");
  res.json({ length: users.length, users: users });
};

export const getUserbyId = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => {
    if (user.id === id) {
      return user;
    }
  });
  res.json({ user: foundUser });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => {
    if (user.id !== id) {
      return user;
    }
  });
  res.json(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const userToUpdate = users.find((user) => user.id == id);
  const updatedUser = { ...userToUpdate, ...req.body };
  res.send({ updatedUser });
  // console.log(userToUpdate);
};
