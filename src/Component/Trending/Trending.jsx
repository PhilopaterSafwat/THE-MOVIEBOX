import React, { useContext, useEffect, useState } from 'react'
import style from './Trending.module.css'
import ShowCards from '../ShowCards/ShowCards'
import { APIContext } from '../../Context/Apicontext'
import ReactPaginate from 'react-paginate';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

export default function Trending() {
    let { PageA, Page, getPopular, setnav } = useContext(APIContext)
    let navigate = useNavigate()
    const [pageRange, setPageRange] = useState(5)

    useEffect(() => {
        Page('https://api.themoviedb.org/3/trending/movie/week')
        getPopular()
        setnav(true)
    }, [])
    useEffect(() => {
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
        <Helmet>
            <title>Trending</title>
        </Helmet>
        {!PageA?.results ? <Loading /> : <> <ShowCards data={PageA?.results} />
            <nav aria-label="Page navigation example" className='justify-center flex'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="NEXT"
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={pageRange}
                    pageCount={480}
                    previousLabel="PREVIOUS"
                    renderOnZeroPageCount={null}
                    containerClassName='inline-flex -space-x-px text-sm mx-auto items-center px-10'
                    pageClassName=''
                    pageLinkClassName='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300'
                    nextClassName='hidden lg:flex bg-main flex items-center justify-center px-3 h-8 leading-tight text-white bg-white border border-gray-300 rounded-e-lg'
                    previousClassName='hidden lg:flex bg-main flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-white border border-e-0 border-gray-300 rounded-s-lg'
                    breakClassName='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300'
                    activeLinkClassName='bg-main text-white'
                />
            </nav></>}

    </>
}

