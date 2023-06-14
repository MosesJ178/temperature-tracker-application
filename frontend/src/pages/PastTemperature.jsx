import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TemperatureChart from '../components/TemperatureChart';

const PastTemperature = () => {
  const [pastRecords, setPastRecords] = useState([]);
  const [errFetching, setErrFetching] = useState(false);
  useEffect(() => {
    const fetchAllPastTemperature = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setPastRecords(response.data.temperatureDetails);
        setErrFetching(false);
      } catch (err) {
        setErrFetching(true);
      }
    }
    fetchAllPastTemperature();
  }, [])
  return (
    <div>
      {errFetching && <p className='flex justify-center mt-20'>Error occured while fetching data</p>}
      <ul className=''>
        {
          pastRecords.map((record) => {
            return (
              <li key={record._id} className='mx-auto md:w-1/2 md:h-1/2'>
                <TemperatureChart temperatureDetails={record.temperatureDetails} present={false} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PastTemperature
