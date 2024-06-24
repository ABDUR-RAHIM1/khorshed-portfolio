import React from 'react'
import Sidebar from './Sidebar' 

function Layout({ children }) {
    return (
        <div className=' w-full costomeHeight bg-color flex justify-between text-white overflow-hidden'>
            <Sidebar />
            
            <div className='main scroll_none'>
                {children}
            </div>
        </div>
    )
}

export default Layout