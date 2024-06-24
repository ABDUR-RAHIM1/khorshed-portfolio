import React from 'react'
import Layout from '../components/Layout/Layout' 
import Skills from '../components/Resume/Skills'
import My_Resume from '../components/Resume/My_Resume'

function Resume() {
  return (
    <Layout> 
            <Skills />
            <My_Resume /> 
    </Layout>
  )
}

export default Resume