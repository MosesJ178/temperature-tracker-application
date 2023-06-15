import React, { useEffect, useState } from 'react';
import { cities } from '../assets/data';
import TostifyContainer from '../middleware/tostifyContainer';
import { toast } from 'react-toastify';
import GraphSection from './GraphSection';
import CitySelect from './CitySelect';

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
                <CitySelect value={firstCity} onChange={handleFirstCityChange} options={firstDropdownOptions} />
                <CitySelect value={secondCity} onChange={handleSecondCityChange} options={secondDropdownOptions} />
            </div>
            <button onClick={handleCompare} className='bg-[#2dd4bf] hover:bg-emerald-600 rounded-sm text-md relative top-5 left-1/2 -translate-x-1/2 text-md px-2 py-1'>Compare</button>
            {
                pairTemperature.length > 0 &&
                <div className={`flex mt-20 lg:flex-row flex-col`}>
                    <GraphSection present={true} temperatureDetails={pairTemperature} />
                    <GraphSection present={false} temperatureDetails={pairTemperature} />
                </div>
            }
        </div>
    );
};

export default SelectPairLocation;
