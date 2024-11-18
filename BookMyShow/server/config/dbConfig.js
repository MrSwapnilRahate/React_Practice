const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
    try{
        await mongoose.connect(dbUrl);
        console.log("Connected to the database");
    }catch(err){
        console.log("Error occured: ", err);

    }
}

module.exports = connectDB;