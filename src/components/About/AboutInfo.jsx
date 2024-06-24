import React from 'react'
import Heading from '../Utilies/Heading'
import aboutData from '../../Data/About'
import { motion } from "framer-motion"
import { FaDownload } from 'react-icons/fa'

function AboutInfo() {
  return (
    <div className='my-24 '>
      <Heading text="about" />

      <div className=' my-10'>
        <div className=' w-full md:w-[75%] my-5 m-auto'>
          <h2 className=' text-lg md:text-xl my-3 font-normal md:font-medium text-gray-300'>I'm a Freelancer Front-end Developer with over 2 years of experience. I'm from Dhaka, Bangladesh. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</h2>
        </div>

        <div className=' flex  md:items-center justify-center gap-2  sm:justify-center sm:gap-2 flex-wrap'>
          {
            aboutData && aboutData.map((data, i) => (

              <div key={i} className=' w-[48%] md:w-[31%] border-2 border-slate-700 my-2 py-4 px-2 text-center rounded-md'>
                <p className='text-[15px] md:text-lg'>
                  <span className=' text-emerald-500'>{data.key} - </span>
                     <br  className='block md:hidden'/> 
                  <span>{ data.value}</span>
                </p>
              </div>


            ))
          }
        </div>

        <div className=' w-full group text-center my-5'>
          <a href='https://drive.google.com/file/d/1vyqUdNU4xAUx3O05ILzCN4o09PqhYQur/view' target='_blank' className='inline-block py-10 px-5 text-2xl bg-emerald-600 rounded-md group-hover:translate-y-5 group-hover:shadow-md duration-300'>
            <span className=' flex items-center gap-2'>  Download CV <FaDownload /></span>
          </a>
        </div>


      </div>

    </div>

  )
}

export default AboutInfo