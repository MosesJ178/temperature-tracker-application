import mongoose from "mongoose";

const temperatureModel = new mongoose.Schema({
    temperatureDetails:[{
        city: {
            type: String,
        },
        currentTemperature: Number,
        description: String,
        humidity: Number,
        maxTemperature: {
            type: Number
        },
        wind: {
            type: Number
        },
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Temperature = mongoose.model("temperature", temperatureModel);

export default Temperature;