import React from 'react'
import raaz from "../images/raaz.png"

const HomePage = () => {
  return (
    <section id='home' className='mx-auto  lg:my-5 w-full lg:w-[50%] p-6 flex flex-col justify-between items-center'>
     <div className='flex flex-col gap-2.5 justify-center mt-5 lg:my-5  items-center w-full'>
     <h1 className='text-white text-5xl text-center'>I'm Raj Tamang</h1>
     <h3 className='text-white '>Frontend Developer</h3>
     </div>
    <div className='w-full'>
    <img src={raaz} alt="raaz" className='w-full h-full' />
    </div>
    </section >
  )
}

export default HomePage