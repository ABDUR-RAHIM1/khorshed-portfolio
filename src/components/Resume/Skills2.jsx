import React from 'react'
import { skillDataItems } from '../../Data/Skills'
import { Line } from 'rc-progress';
import {motion} from "framer-motion"
function Skills2() {
    return (

        <div className="skilsItems">
            {
                skillDataItems && skillDataItems.map((sk, index) => (
                    <Items key={index} data={sk} />
                ))
            }
        </div>
    )
}

export default Skills2


export const Items = (props) => {
    const { title, value } = props.data;
    return (
        <motion.div
            initial={{ x: 60 , opacity:0}}
            whileInView={{ x: 0 , opacity:1}}
            viewport={{once:true}}
            transition={{ duration: "1" }}
            className='w-full sm:w-48 mt-4 '>
            <h5 className='text-sm  md:text-lg capitalize mb-2 font-semibold'>{title} - <span className=' text-emerald-600'>{`(${value}%)`}</span> </h5>
            <Line percent={value} trailWidth={4} strokeWidth={4} strokeColor="#00f5839e" trailColor='#72e2ae9e' />

        </motion.div>
    )
}