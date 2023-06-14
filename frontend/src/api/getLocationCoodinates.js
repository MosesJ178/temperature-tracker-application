import axios from "axios";
import { cities } from "../assets/data";
const getLocationCoodinates = async () => {
  
  // const apiKey = 'cfc8c2d38ad3432fb5e52cf223a8b998';
  try {
    let storeCoordinate = []
    for (const city of cities) {
      // const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}`);
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
      const data = response.data;
      if (data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        storeCoordinate.push({ city: city, latitude:latitude, longitude:longitude });
      }
    }
    return storeCoordinate;
  }
  catch (err) {
    console.log(err.message);
  }
}

export default getLocationCoodinates;
