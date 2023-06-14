import express from "express";
import { getTemperatureData, postTemperatureData } from '../controllers/temperature.controller.js'
const router = express.Router();

router.get('/',getTemperatureData);
router.post('/',postTemperatureData);

export default router;