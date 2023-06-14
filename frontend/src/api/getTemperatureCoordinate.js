import axios from "axios";

const getTemperatureCoordinate = async (coord) => {
    const apiKey = '329cce8b9355254b80ab04bd0f525c82';
    try {
        const storeTemperature = [];
        for (let coordinate of coord) {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${apiKey}`
            );
            storeTemperature.push({
                "city": coordinate.city,
                "currentTemperature": response.data.main.temp - 273.15,
                "maxTemperature": response.data.main.temp_max - 273.15,
                "humidity": response.data.main.humidity,
                "wind": response.data.wind.speed,
                "description": response.data.weather[0].description
            });
        }
        console.log(storeTemperature,"fresh data");
        storeTemperature.forEach((test) => console.log(test.currentTemperature));
        const response = await axios.post('http://localhost:5000/',{storeTemperature});
        return storeTemperature;
    }
    catch (err) {
        console.log("er");
    }
}

export default getTemperatureCoordinate;
