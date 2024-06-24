import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import Heading from '../components/Utilies/Heading'
import WorksProject from '../components/Works/WorksProject'

function Works() {
  const Btn = [ "React", "Static", "All"]
  const [filter, setFilter] = useState("static")

  const handleClick = (e) => {
    const text = (e.target.innerText).toLowerCase()
    setFilter(text)
  }

  return (
    <Layout>
      <div className='my-20'>
        <Heading text="My Works" />

        <div className="filterBtnArea">


          {
            Btn && Btn.map((btn, index) => (
              <button
              key={index}
              className={`filterBtn ${filter === btn.toLocaleLowerCase() ? 'activeBtn' : 'bg-emerald-400'}`}
              onClick={handleClick}
            >
              {btn}
            </button>
            ))
          }
        </div>

        <div className="my_works"> 
          <WorksProject filterText={filter} />
        </div>
      </div>
    </Layout>
  )
}

export default Works