import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import GenerateSkeleton from './GenerateSkeleton'

const SkeletonLoader = () => {
    return (
        <div className='mt-5'>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-1/2 flex justify-center'>
                    <Skeleton className='sm:w-[488px] w-[270px] h-[279px]' />
                </div>
                <div className='flex mt-10 flex-row items-center justify-center lg:flex-col w-1/2'>
                    <GenerateSkeleton count={4} />
                </div>
            </div>
            <div className='absolute mt-20 left-1/2 -translate-x-1/2'>
                <GenerateSkeleton count={1} />
            </div>
        </div>
    )
}

export default SkeletonLoader
