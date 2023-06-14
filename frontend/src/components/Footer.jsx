import React from 'react'
import portfolio from '../assets/socialMedia/briefcase.png'
import github from '../assets/socialMedia/github.png'
import linkedin from '../assets/socialMedia/linkedin.png'

const Footer = () => {
    return (
        <div>
            <ul className='flex sm:px-10 bg-slate-700 px-1 justify-between border py-2 shadow-xl'>
                <p className='text-xl font-bold'><span className='text-white'>Comfort</span><span className='bg-green-500 p-1 text-black font-bold rounded-lg'>Zone</span></p>
                <ul className='flex'>
                    <li><a href="https://www.linkedin.com/in/mosesj-dev/"><img width={25} src={linkedin} alt="" /></a></li>
                    <li className='mx-2'><a href="https://github.com/MosesJ178"><img width={25} src={github} alt="" /></a></li>
                    <li><a href="https://mosesj.netlify.app/"><img width={25} src={portfolio} alt="" /></a></li>
                </ul>
            </ul>
        </div>
    )
}

export default Footer
