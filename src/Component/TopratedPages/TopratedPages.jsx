import React, { useContext, useEffect, useState } from 'react'
import style from './TopratedPages.module.css'
import ShowCards from '../ShowCards/ShowCards'
import { APIContext } from '../../Context/Apicontext'
import ReactPaginate from 'react-paginate';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function TopratedPages() {
    
    let { PageA, Page, getPopular } = useContext(APIContext)
    let [nummm, setnummm] = useState()
    let pageCount = 32
    let navigate = useNavigate()
    let prams = useParams()
    const [pageRange, setPageRange] = useState(5)
    useEffect(() => {
        setnummm(prams.id);
        Page('https://api.themoviedb.org/3/movie/top_rated', prams.id)
    }, [prams.id])

    useEffect(() => {
        Page('https://api.themoviedb.org/3/movie/top_rated', prams.id)
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

