import React from 'react'
import style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {


    return <>
        <Header />
        <div className='container p-5 lg:p-10'>
            <Navbar />
            <Outlet>
            </Outlet>
        </div>
        <Footer />
    </>
}

