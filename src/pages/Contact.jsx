import React from 'react'
import Layout from '../components/Layout/Layout'
import Heading from '../components/Utilies/Heading'
import { contactInfo } from '../Data/Contact'
import ContactForm from '../components/Contact/ContactForm'
import {motion} from "framer-motion"
function Contact() {
  return (
    <Layout>
      <div className="my-20">
        <Heading text="Contact" />

        <motion.div
          initial={{  opacity:0}}
          whileInView={{ opacity:1}} 
          transition={{ duration: "1" }}
         className="contact_area">
          <motion.div
            initial={{ x: -60 , opacity:0}}
            whileInView={{ x: 0 , opacity:1}}
            viewport={{once:true}}
            transition={{ duration: "1" }}
          className=" w-full md:w-48">
            {
              contactInfo &&
              contactInfo.map((ci, index) => (
                <Info key={index} data={ci} />
              ))
            }
          </motion.div>
          <div className=" w-full md:w-48">

              <ContactForm/>

          </div>
        </motion.div>

      </div>
    </Layout>
  )
}

export default Contact

export const Info = (props) => {
  const { icon, title, value } = props.data;
  return (
    <div className=' my-4 card_color hover:translate-y-0 flex items-center justify-start gap-4 px-3 py-4'>
      <span className='text-3xl bg-emerald-200 p-3 rounded-full text-emerald-800 hover:bg-emerald-700 duration-200 hover:text-yellow-700 shadow-md'>{icon}</span>
      <div>
        <h6 className='text-xl mb-2 hover:text-emerald-400 duration-200 cursor-pointer'>{title}</h6>
        {
          value && value.map((vl, i) => (
            <p className='leading-[2rem] hover:text-emerald-400 duration-200 cursor-pointer' key={i}>{vl}</p>
          ))
        }
      </div>
    </div>
  )
}