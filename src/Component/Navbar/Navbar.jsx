import React, { useContext } from 'react'
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { APIContext } from '../../Context/Apicontext'

export default function Navbar() {
    const { nav } = useContext(APIContext)

    return <>
        <nav className='mt-10 flex items-start'>
            <div className='w-full'>
                <ul className='gap-10 text-2xl flex flex-col lg:flex-row'>
                    <li className='relative'><NavLink to={'/'} className={`px-5 text-gray-300 text-main-hove hover:[color:#ff0079] ${nav && 'active'} `}>Trending</NavLink></li>
                    <li className='relative'><NavLink to={'topRated'} className='px-5 text-gray-300 text-main-hover hover:[color:#ff0079] '>TopRated</NavLink></li>
                    <li className='relative'><NavLink to={'New'} className='px-5 text-gray-300 text-main-hover hover:[color:#ff0079] '>New</NavLink></li>
                    <li className='relative'><NavLink to={'Comming'} className='px-5 text-gray-300 text-main-hover hover:[color:#ff0079] '>Comming</NavLink></li>
                </ul>
                <div className='mt-5 h-[2px] bg-gray-200 hidden lg:block' />
            </div>
            <Link to={'search'}><i className="fa-solid fa-magnifying-glass text-pink-500 text-2xl ms-[-25px] mt-3 relative z-50"></i></Link>
        </nav>


    </>
}

