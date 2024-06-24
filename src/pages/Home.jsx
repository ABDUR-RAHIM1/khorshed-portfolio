import React from 'react'
import HomeMain from '../components/Home/HomeMain' 
import Layout from '../components/Layout/Layout'

function Home() {
    return (
        <Layout  >

            <div className=" text-white flex items-center justify-center h-full ">
                <HomeMain />
            </div>
        </Layout>
    )
}

export default Home