import TemperatureChart from '../components/TemperatureChart'

const GraphSection = ({ temperatureDetails, present }) => {
    const title = present ? 'Current Data' : 'Future Data';
  
    return (
      <div className={`mb-10 ${present ? 'lg:w-1/2' : 'w-full'}`}>
        <p className={`font-bold text-xl text-center ${present ? 'text-[#372ee5]' : 'text-green-500'} underline`}>{title}</p>
        <TemperatureChart present={present} temperatureDetails={temperatureDetails} />
      </div>
    );
  };

export default GraphSection
