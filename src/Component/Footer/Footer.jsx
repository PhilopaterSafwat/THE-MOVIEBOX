import React from 'react'
import style from './Footer.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {

    return <>
        <footer className='bg-gray-200 mt-8'>
            <div className='container px-5 py-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-0'>
                <Link to={'/'} className='flex flex-col gap-3 justify-center text-gray-900 items-center lg:items-start'>
                    <div className='flex items-center text-xs'><h1>THEMOVIE</h1><h1 className='font-bold'>BOX</h1></div>
                    <span className='ms-1 text-gray-500'>Devlopated By Philopater Safwat</span>
                </Link>
                <ul className='gap-5 text-2xl flex flex-wrap justify-center'>
                    <li className='relative'><Link to={'/'} className={` text-gray-500 text-xl`}>Trending</Link></li>
                    <li className='relative'><Link to={'topRated'} className=' text-gray-500 text-xl'>TopRated</Link></li>
                    <li className='relative'><Link to={'New'} className=' text-gray-500 text-xl'>New</Link></li>
                    <li className='relative'><Link to={'Comming'} className=' text-gray-500 text-xl'>Comming</Link></li>
                </ul>
            </div>
        </footer>

    </>
}

