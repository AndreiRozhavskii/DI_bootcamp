import { db } from "../config/db.js";

export const login = (email) => {
  return db("users").select("user_id", "email", "password").where({ email });
};

export const allusers = () => {
  return db("users").select("user_id", "email");
};
