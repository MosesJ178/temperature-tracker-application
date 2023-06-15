import Select from 'react-select';

const CitySelect = ({ value, onChange, options }) => {
    return (
        <Select
            className="md:w-[20rem] w-[80%]"
            value={value}
            onChange={onChange}
            options={options}
        />
    );
};

export default CitySelect
