import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TemperatureChart from '../components/TemperatureChart';
import { formatDistanceToNow } from 'date-fns';
import PaginationNumbers from './Paginationnumbers';

const PaginateTemperatureDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pastRecords, setPastRecords] = useState([]);

  useEffect(() => {
    const fetchAllPastTemperature = async () => {
      try {
        const response = await axios.get('https://temperature-tracker-app.onrender.com/');
        setPastRecords(response.data.temperatureDetails);
      } catch (err) {
        alert(err);
      }
    }
    fetchAllPastTemperature();
  }, [])

  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pastRecords.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className='mt-5 lg:max-w-screen-xl mx-auto'>
      <ul className='flex flex-col items-center'>
        {
          currentItems.map((record, i) => {
            return (
              <li key={record._id} className='md:w-1/2 md:h-1/2'>
                <TemperatureChart temperatureDetails={record.temperatureDetails} present={i % 2 === 0 ? false : true} />
                <div className='xl:ml-[5rem]'>
                  <p className='font-semibold'>{formatDistanceToNow(new Date(record.createdAt), { addSuffix: true })}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='flex justify-center items-center'>
        <PaginationNumbers itemsPerPage={itemsPerPage} totalItems={pastRecords.length} paginate={paginate}/>
      </div>
    </div>
  )
}

export default PaginateTemperatureDetails
