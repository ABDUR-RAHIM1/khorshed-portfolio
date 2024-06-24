import React from 'react' 
import AboutInfo from '../components/About/AboutInfo' 
import Reviews from '../components/About/Reviews'
import Layout from '../components/Layout/Layout'

function About() {
  return (
    <Layout> 
        <AboutInfo /> 
        <Reviews /> 
    </Layout>
  )
}

export default About