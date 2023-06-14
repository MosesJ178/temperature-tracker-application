import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { cities } from '../assets/data';
import TemperatureChart from './TemperatureChart';
import TostifyContainer from '../middleware/tostifyContainer';
import { toast } from 'react-toastify';

const SelectPairLocation = ({ handleCompareGraph, temperatureDetails }) => {
    const [firstCity, setFirstCity] = useState(null);
    const [secondCity, setSecondCity] = useState(null);
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [pairTemperature, setPairTemperature] = useState([]);

    useEffect(() => {
        const modifyCities = () => {
            const modifiedData = cities.map((city) => ({ value: city, label: city }));
            return modifiedData;
        };

        const res = modifyCities();
        setDropdownOptions(res);
    }, []);

    const handleFirstCityChange = (selectedOption) => {
        setFirstCity(selectedOption);

        if (secondCity && selectedOption?.value === secondCity.value) {
            setSecondCity(null);
        }
    };

    const handleSecondCityChange = (selectedOption) => {
        setSecondCity(selectedOption);
        if (firstCity && selectedOption?.value === firstCity.value) {
            setFirstCity(null);
        }
    };

    const handleCompare = () => {
        if (firstCity && secondCity) {
            console.log(temperatureDetails);
            const filteredCities = temperatureDetails.filter((detail) => detail.city === firstCity.value || detail.city === secondCity.value)
            setPairTemperature(filteredCities);
        } else {
            toast.error("Select both cities");
        }
    }

    const firstDropdownOptions = dropdownOptions.filter(option => option.value !== secondCity?.value);
    const secondDropdownOptions = dropdownOptions.filter(option => option.value !== firstCity?.value);

    return (
        <div className='mb-10'>
            <TostifyContainer />
            <div className='flex px-2 justify-between'>
                <Select
                    className='md:w-[20rem] w-[80%]'
                    value={firstCity}
                    onChange={handleFirstCityChange}
                    options={firstDropdownOptions}
                />
                <Select
                    className='md:w-[20rem] w-[80%]'
                    value={secondCity}
                    onChange={handleSecondCityChange}
                    options={secondDropdownOptions}
                />
            </div>
            <button onClick={handleCompare} className='bg-[#2dd4bf] hover:bg-emerald-600 rounded-sm text-md relative top-5 left-1/2 -translate-x-1/2 text-md px-2 py-1'>Compare</button>
            {
                pairTemperature.length > 0 && <div className={`flex mt-20 lg:flex-row flex-col`}>
                    <div className={`mb-10 w-full`}>
                        <p className='font-bold text-xl text-center text-blue-500 underline'>Present Data</p>
                        <TemperatureChart present={true} temperatureDetails={pairTemperature} />
                    </div>
                    {
                        <div className='w-full mb-10'>
                            <p className='font-bold text-xl text-center text-green-500 underline'>Future Data</p>
                            <TemperatureChart present={false} temperatureDetails={pairTemperature} />
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default SelectPairLocation;
