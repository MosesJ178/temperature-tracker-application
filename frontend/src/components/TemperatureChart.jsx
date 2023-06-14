import React, { memo } from 'react';
import { Bar } from 'react-chartjs-2';
import '../App.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TemperatureChart = ({ present, temperatureDetails }) => {
    const cityNames = temperatureDetails?.map((detail) => detail.city);
    const temperatures = temperatureDetails?.map((detail) =>
        present ? detail.currentTemperature : detail.maxTemperature
    );

    const gradientColorScale = (value) => {
        if (value >= 25) {
            return 'rgb(242, 76, 61,1)'; // Orange
        } else if (value >= 20) {
            return 'rgba(3, 201, 136, 1)'; // Light Green
        } else if (value >= 10) {
            return 'rgba(242, 190, 34, 1)'; // Yellow
        } else if (value >= 9) {
            return 'rgb(242, 76, 61,1)'; // Red
        } else {
            return 'rgba(0, 0, 255, 0.8)'; // Blue
        }
    };

    const data = {
        labels: cityNames,
        datasets: [
            {
                label: 'Temperature',
                data: temperatures,
                backgroundColor: temperatures.map((temp) => gradientColorScale(temp))
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div>
            <div className="chartCard flex justify-center items-center">
                <div className="chartBox flex justify-center items-center">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default memo(TemperatureChart);