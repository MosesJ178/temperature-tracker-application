import React, { useEffect, useState } from 'react';
import getLocationCoodinates from '../api/getLocationCoodinates';
import getTemperatureCoordinate from '../api/getTemperatureCoordinate';
import ListIndications from '../components/ListIndications';
import SelectPairLocation from '../components/SelectPairLocation';
import SkeletonLoader from '../components/SkeletonLoader';
import Analytics from '../components/Analytics';
import GraphSection from '../components/GraphSection';

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
        alert(error);
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
              <GraphSection temperatureDetails={temperatureDetails} present={true} />
              {
                (predictFutureButton) ?
                  (
                    <GraphSection temperatureDetails={temperatureDetails} present={false} />
                  ) :
                  (
                    <Analytics temperatureDetails ={temperatureDetails} />
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