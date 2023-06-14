import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GenerateSkeleton = ({ count }) => {
    const skeletons = [];

    for (let i = 0; i < count; i++) {
        skeletons.push(
            <div key={i}>
                <Skeleton className='sm:w-[20rem] w-[200px] h-[2rem]' />
            </div>
        );
    }

    return <div>{skeletons}</div>;
};

export default GenerateSkeleton;
