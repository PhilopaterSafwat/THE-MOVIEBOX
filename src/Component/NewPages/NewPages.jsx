import React, { useContext, useEffect, useState } from 'react'
import style from './NewPages.module.css'
import { APIContext } from '../../Context/Apicontext'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function NewPages() {
    let { PageA, Page, getPopular } = useContext(APIContext)
    let [nummm, setnummm] = useState()
    let pageCount = 32
    let navigate = useNavigate()
    let prams = useParams()
    const [pageRange, setPageRange] = useState(5)
    
    useEffect(() => {
        setnummm(prams.id);
        Page('https://api.themoviedb.org/3/movie/now_playing', prams.id)
    }, [prams.id])

    useEffect(() => {
        Page('https://api.themoviedb.org/3/movie/now_playing', prams.id)
        const updatePageRange = () => {
            setPageRange(window.innerWidth < 600 ? 3 : 5);
        };

        updatePageRange()
        window.addEventListener('resize', updatePageRange)

        return () => {
            window.removeEventListener('resize', updatePageRange)
        };

    }, []);
    const handlePageClick = (data) => {
        navigate(`/page/${data.selected + 1}`)
    }


    return <>

    </>
}

