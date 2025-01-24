const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.mode("User", UserSchema);

// controllers

export const getUsers = () => UserModel.find();

// check if user already exsist
export const getUserByEmail = (email: string) => UserModel.findOne({ email });

// confirm is user already logedIn or not
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });

export const getUserById = (id: string) => UserModel.findById(id);

// create a new user
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user: any) => user.toObject());

// delete user
export const deleteUser = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });

// update user
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
