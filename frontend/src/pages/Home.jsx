import React, { useEffect, useState } from 'react';
import getLocationCoodinates from '../api/getLocationCoodinates';
import getTemperatureCoordinate from '../api/getTemperatureCoordinate';
import TemperatureChart from '../components/TemperatureChart';
import ListIndications from '../components/ListIndications';
import SelectPairLocation from '../components/SelectPairLocation';
import SkeletonLoader from '../components/SkeletonLoader';

const Home = () => {
  const [temperatureDetails, setTemperatureDetails] = useState([]);
  const [predictFutureButton, setPredictFutureButton] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const coordinateResponse = await getLocationCoodinates();
        const resp = await getTemperatureCoordinate(coordinateResponse);
        setTemperatureDetails(resp);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='sm:px-10 lg:max-w-screen-xl mx-auto min-h-screen'>
      {
        temperatureDetails?.length > 0 ?
          <div className='mt-8'>
            <div className={`flex lg:flex-row flex-col ${predictFutureButton ? 'items-center justify-center' : 'justify-start'}`}>
              <div className={`mb-10 ${predictFutureButton ? 'w-full' : 'lg:w-1/2'}`}>
                <p className='font-bold text-xl text-center text-[#372ee5] underline'>Current Data</p>
                <TemperatureChart present={true} temperatureDetails={temperatureDetails} />
              </div>
              {
                (predictFutureButton) ?
                  (
                    <div className='w-full mb-10'>
                      <p className='font-bold text-xl text-center text-green-500 underline'>Future Data</p>
                      <TemperatureChart present={false} temperatureDetails={temperatureDetails} />
                    </div>
                  ) :
                  (
                    <div className='w-full flex flex-col justify-center items-center mb-10'>
                      <p className='font-bold text-xl text-center text-green-500'>Analytics</p>
                      <p className='text-slate-700 font-semibold'>Climatic Condition</p>
                      <ul className='border border-black rounded-md p-3'>
                        {
                          temperatureDetails.map((detail, i) => {
                            return (
                              <li className='flex' key={i}>
                                <p className='font-bold'>{detail.city} -</p>
                                <p className=''>{detail.description.charAt(0).toUpperCase() + detail.description.slice(1)}</p>
                              </li>
                            )
                          })
                        }
                      </ul>
                      <p></p>
                    </div>
                  )
              }
            </div>
            <ListIndications />
            <button onClick={(e) => setPredictFutureButton(!predictFutureButton)}
              className='ml-2 button mt-16 bg-[#372ee5] hover:bg-[#817ce3] px-3 py-1 text-white rounded-md'>
              {!predictFutureButton ? 'Predict Future Temperature' : 'See Info'}
            </button>
            <p className='text-3xl font-semibold px-2 my-10 text-center'>Getting Confused ? Let's <span className='uppercase text-2xl text-[#372ee5] font-bold'>compare</span> Cities to Explore</p>
            <SelectPairLocation temperatureDetails={temperatureDetails} />
          </div>
          : <SkeletonLoader />
      }
    </div>
  );
};

export default Home;