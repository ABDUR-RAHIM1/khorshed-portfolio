import React from 'react'
import Heading from '../Utilies/Heading'
import { skillsData } from '../../Data/Skills'
import { motion } from "framer-motion"
function Skills() {
    return (
        <>
            <div className='my-5'>
                <Heading text="My skills" />
            </div>
            <div className='flex items-center justify-between flex-wrap '>
                {
                    skillsData && skillsData.map((sk, index) => (
                        <Circles key={index} data={sk} />
                    ))
                }
            </div>
            <Skills2 />
        </>

    )
}

export default Skills
import { Circle } from 'rc-progress';
import Skills2 from './Skills2'

export const Circles = (props) => {
    const { title, value } = props.data 
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration : "2"}}
            className='w-full sm:w-48 md:w-23 card_color p-4 text-center my-4 '>
            <div className='w-8/12 m-auto relative'>
                <Circle percent={value} trailWidth={8} strokeWidth={9} strokeColor="#00f5839e" trailColor='#72e2ae9e' >
                </Circle>
                <strong className='absolute capitalize' style={{ top: "50%", left: "50%", transform: "translate(-50% , -50%)" }}>{value} %</strong>

            </div>
            <p className='my-3'>{title}</p>
        </motion.div>
    )
}