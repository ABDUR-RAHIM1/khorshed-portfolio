import React from 'react'
import { motion } from "framer-motion"

function Heading({ text }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}

            className='border_page'>
            <h1 className='page_heading'>{text}</h1>
            <div className='page_border'>
                <span></span>
            </div>
        </motion.div>
    )
}

export default Heading