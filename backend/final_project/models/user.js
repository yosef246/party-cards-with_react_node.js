import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
    lowercase: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024, //hashed password
  },
});

const User = mongoose.model("User", userSchema, "users");

export default User;
