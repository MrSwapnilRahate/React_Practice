const mongoose = require("mongoose");

const dbURL = "mongodb+srv://swapnilrahate1998:3hq7897R7ORmuPhL@cluster0.4uzpdus.mongodb.net/";

// connect to DB.

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error: ", err);
    }

}

module.exports = connectDb;