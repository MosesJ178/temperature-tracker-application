import axios from "axios";
import { cities } from "../assets/data";

const getLocationCoodinates = async () => {
  try {
    let storeCoordinate = []
    for (const city of cities) {
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
    alert(err);
  }
}

export default getLocationCoodinates;
