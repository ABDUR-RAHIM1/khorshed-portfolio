import React from 'react'
import Heading from '../Utilies/Heading'
import { educationalData, workingEducation } from '../../Data/Resume'
import { motion } from 'framer-motion'

function My_Resume() {
  return (
    <div className='my-20'>
      <Heading text="My resume" />

      <div className="my_resume">
        <div className="side">
          <h2> Educational Qualification </h2>
          {
            educationalData &&
            educationalData.map((ed, index) => (
              <Education key={index} data={ed} />
            ))
          }
        </div>
        <div className="side">
          <h2>
            Working Experience
          </h2>
          {
           workingEducation && 
           workingEducation.map((ed , index)=>(
             <Education key={index} data={ed} />
           ))
          }
        </div>
      </div>

    </div>
  )
}

export default My_Resume


export const Education = (props) => {
  const { title, academyName, year, desc } = props.data;
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
    className='mb-5 bg-slate-800 py-3 px-2 rounded-md'>
      <h4 className='text-xl text-emerald-500'>{title} <span className=' text-white text-sm bg-slate-800 py-1 px-4 rounded-md'>{year}</span> </h4>
      <div className='my-1 ml-6'>
        <p className='text-capitalize mb-3 font-semibold'>{academyName}</p>
        <p className='text-sm capitalize leading-[1.5rem]'>{desc}</p>
      </div>
    </motion.div>
  )
}

