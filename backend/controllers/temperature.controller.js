import Temperature from "../models/temperature.model.js";

const getTemperatureData = async (req, res) => {
    try {
        const temperatureDetails = await Temperature.find().sort({ _id: -1 }).limit(10);
        return res.status(200).json({ temperatureDetails });
    } catch (err) {
        return res.status(400).json({ err: "Error occured" });
    }
}

const postTemperatureData = async (req, res) => {
    req.body.storeTemperature.forEach((test) => console.log(test.currentTemperature));
    try {
        const currentDate = new Date(); 
        const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0); // Set the time to 00:00:00
        const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59); // Set the time to 23:59:59
        const documents = await Temperature.find({
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        }).sort({ createdAt: 1 });

        if (documents.length >= 5) {
            await Temperature.findByIdAndDelete({ _id: documents[0]._id });
            const { _id } = await Temperature.create({ temperatureDetails: req.body.storeTemperature });
            console.log(_id);
          } else {
            const freshDataAdded = await Temperature.create({ temperatureDetails: req.body.storeTemperature });
          }
        res.json({ name: "hello" });
    } catch (error) {
        console.log("Error storing temperature data:", error);
    }
}


export { getTemperatureData, postTemperatureData }