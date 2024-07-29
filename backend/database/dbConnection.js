import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({ path: "./config/config.env" })


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("Connected to database succesfully.")
    }).catch(err => {
        console.log(`Some error occured while connecting to the database ${err}`)
    })
}

 