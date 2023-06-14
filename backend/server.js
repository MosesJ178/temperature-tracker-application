import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import temperatureRoutes from "./routes/temperature.route.js"

const app = express();
app.use(cors({
    origin: "*"
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', temperatureRoutes);

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/temperaturetracker');
        console.log("connected to DB");
    } catch (err) {
        console.log("err while connecting to DB");
    }
}

connectMongoDB()
    .then(() => {
        app.listen(5000, () => {
            console.log("server is running on port 5000")
        });
    })
    .catch((err) => {
        console.log("err while connecting to server", err);
    })