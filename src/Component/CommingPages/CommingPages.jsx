import React, { useContext, useEffect, useState } from 'react'
import style from './CommingPages.module.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { APIContext } from '../../Context/Apicontext'
import Loading from '../Loading/Loading'
import ShowCards from '../ShowCards/ShowCards'
import ReactPaginate from 'react-paginate'

export default function CommingPages() {
    let { PageA, Page, getPopular } = useContext(APIContext)
    let [nummm, setnummm] = useState()
    let pageCount = 32
    let navigate = useNavigate()
    let prams = useParams()
    const [pageRange, setPageRange] = useState(5)

    useEffect(() => {
        setnummm(prams.id);
        Page('https://api.themoviedb.org/3/movie/upcoming', prams.id)
    }, [prams.id])

    useEffect(() => {
        Page('https://api.themoviedb.org/3/movie/upcoming', prams.id)
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

