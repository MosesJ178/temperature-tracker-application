const Analytics = ({ temperatureDetails }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-10">
            <p className="font-bold text-xl text-center text-green-500">Analytics</p>
            <p className="text-slate-700 font-semibold">Climatic Condition</p>
            <ul className="border border-black rounded-md p-3">
                {temperatureDetails.map((detail, i) => (
                    <li className="flex" key={i}>
                        <p className="font-bold">{detail.city} -</p>
                        <p className="">{detail.description.charAt(0).toUpperCase() + detail.description.slice(1)}</p>
                    </li>
                ))}
            </ul>
            <p></p>
        </div>
    );
};

export default Analytics;