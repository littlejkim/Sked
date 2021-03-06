const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        googleId: String,
        email: String,
        displayName: String,
        lastName: String,
        firstName: String,
        photo: String,
        date: { type: Date, default: Date.now }
    },
    { collection: "users" }
);

mongoose.model("users", userSchema);
