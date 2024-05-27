import React from 'react'
import Navbar from '../components/Navbar'


const About = () => {
  return (
    <>
        <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-0 px-4 '>
                <div className='mt-80 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl text-center items-center justify-center'>
                       About us page
                    </h1>
                </div>
            </div>
    </>
  )
}

export default About
