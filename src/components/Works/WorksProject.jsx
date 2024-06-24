import React, { useEffect, useState } from 'react'
import { worksData } from '../../Data/Works'
import { motion } from "framer-motion"
import { FaUnlink, FaFileImage, FaAppStore, FaArtstation } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function WorksProject(props) {
  const { filterText } = props;
  const [project, setProject] = useState([])
  const [img, setImg] = useState("")
  const [imgClick, setImgClick] = useState(false)


  const handleImageClick = (e) => {
    setImg(e)
    setImgClick(!imgClick)
  }

  const getProjects = () => {
    const project = worksData.filter(p => p.tech === filterText)
    filterText === "all" ? setProject(worksData) : setProject(project)

  }

  useEffect(() => {
    getProjects()
  }, [filterText])

  return (
    <div className='flex items-center justify-between flex-wrap relative'>
      {
        project &&
        project.slice().reverse().map((wrk, index) => (
          <Projects key={index} data={wrk} handleImageClick={handleImageClick} />
        ))
      }
 

      <div className={` ${imgClick ? "hidden md:block" : "hidden"} py-5 hidden fixed top-0 left-0 bg-black w-full h-full overflow-y-auto scroll_none`}>
        <IoMdClose onClick={() => setImgClick(!imgClick)} className='text-red-500 text-3xl absolute top-3 right-3 cursor-pointer' />
        <img className='w-8/12 mt-20 m-auto h-auto' src={img} alt="" />
      </div>

      {
        project.length < 1 && <h2 className=' text-xl font-medium  text-center my-5 italic text-red-500'>  <span className=' text-yellow-500'>{filterText} : </span> No Project</h2>
      }

    </div>
  )
}

export default WorksProject


export const Projects = (props) => {
  const { title, tech, link, image } = props.data;
  const { handleImageClick } = props


  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      className='w-full sm:w-48 md:w-31 my-3 card_color'>
      <div className='relative projectImg '>
        <img className=' w-full h-44' src={image} alt="" />
        <div className='projectImgBg' >
          <a href={link} target='_blank'>
            <FaUnlink title='Live Link' className='text-4xl text-black cursor-pointer bg-emerald-400 rounded-full p-2 m-2' />
          </a>
          <FaFileImage onClick={() => handleImageClick(image)} title='Images' className='text-4xl text-black cursor-pointer bg-emerald-400 rounded-full p-2 m-2' />
        </div>
      </div>
      <div className='my-3 px-2'>
        <h4 className='text-xl capitalize mb-3 flex items-center gap-3'>  <span className='text-2xl text-emerald-400'><FaAppStore /></span> {tech}</h4>
        <p className='flex items-center gap-3 capitalize'>  <span className='text-2xl text-emerald-400'><FaArtstation /></span>  {title}</p>
      </div>



    </motion.div>
  )
}