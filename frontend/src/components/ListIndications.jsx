import React from 'react'
import { legendLabels } from '../assets/data';
import '../App.css';


const ListIndications = () => {
    return (
        <div className='absolute left-1/2 -translate-x-1/2'>
        <ul className="custom-legend flex">
        {
            legendLabels.map((label, index) => {
                return (
                    <div key={index} className='flex flex-nowrap items-center'>
                        <span className="legend-color" style={{ backgroundColor: label.color }}></span>
                        <span className='mr-1'>{label.label}</span>
                    </div>
                )
            })
        }
    </ul>
        </div>
    )
}

export default ListIndications
