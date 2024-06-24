import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdMenuOpen, MdClose } from "react-icons/md";

function Navbar() {
    const [menuClick, setMenuClick] = useState(true)
    const location = useLocation()
    const items = [
        { item: "home", link: "/" },
        { item: "about", link: "/about" },
        { item: "resume", link: "/resume" },
        { item: "projects", link: "/projects" },
        { item: "contact", link: "/contact" },
    ]
    return (
        <header className='text-white wrapper py-3 flex items-center justify-between border-b border-gray-50'>
            <h1 className='text-2xl italic font-semibold uppercase text-emerald-500'>
                <Link to="/">𝒦𝐻𝒪𝑅𝒮𝐻𝐸𝒟</Link>
            </h1>
            <nav>
                <ul className={`${menuClick ? "-right-[600px]" : "right-0"} navUl duration-1000`}>

                    {
                        items && items.map((item, i) => (
                            <li key={i} onClick={() => setMenuClick(!menuClick)}>
                                <Link className={location.pathname === item.link ? 'active' : ''} to={item.link}>{item.item}</Link>
                            </li>
                        ))
                    }
                </ul>

            </nav>
            <button onClick={() => setMenuClick(!menuClick)} className="menuIcons py-1 px-2 rounded-md ">
                {menuClick ? <MdMenuOpen className='text-3xl text-emerald-600' /> :
                    <MdClose className='text-3xl text-red-500' />}
            </button>
        </header>
    )
}

export default Navbar