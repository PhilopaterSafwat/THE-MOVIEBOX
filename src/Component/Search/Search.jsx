import React, { useContext, useEffect, useState } from 'react'
import style from './Search.module.css'
import { APIContext } from '../../Context/Apicontext'
import Loading from '../Loading/Loading'
import ReactPaginate from 'react-paginate'
import ShowCards from '../ShowCards/ShowCards'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Search() {
    let { setnav, search, Search, toprated } = useContext(APIContext)
    const [pageRange, setPageRange] = useState(5)
    const [searchValue, setsearchValue] = useState(null)
    let { id, searchN } = useParams()
    const [force, setforce] = useState(0)
    let navigate = useNavigate()

    useEffect(() => {
        setnav(null)
        Search(searchN, id)
        setforce(id ? (id - 1) : 0)
        toprated()
        const updatePageRange = () => {
            setPageRange(window.innerWidth < 600 ? 3 : 5);
        };

        updatePageRange()
        window.addEventListener('resize', updatePageRange)

        return () => {
            window.removeEventListener('resize', updatePageRange)
        };
    }, [])


    function searchinput(value) {
        setsearchValue(value)
        Search(value);
        setforce(0)

    }

    const handlePageClick = (data) => {
        navigate(`page/${searchValue}/${data.selected + 1}`)
    }

    return <>
        <Helmet>
            <title>Search</title>
        </Helmet>
        <Outlet />
        {!search?.results ? <Loading /> : <>
            <form className="w-fullmx-auto my-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Movie Name" onChange={(e) => { searchinput(e.target.value) }} />

                </div>
            </form>

            <ShowCards data={search?.results} />
            <nav aria-label="Page navigation example" className={`justify-center ${search.total_pages < 2 ? 'hidden' : 'flex'}`}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="NEXT"
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={pageRange}
                    pageCount={search.total_pages}
                    previousLabel="PREVIOUS"
                    renderOnZeroPageCount={null}
                    containerClassName='inline-flex -space-x-px text-sm mx-auto items-center px-10'
                    pageClassName=''
                    pageLinkClassName='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300'
                    nextClassName='hidden lg:flex bg-main flex items-center justify-center px-3 h-8 leading-tight text-white bg-white border border-gray-300 rounded-e-lg'
                    previousClassName='hidden lg:flex bg-main flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-white border border-e-0 border-gray-300 rounded-s-lg'
                    breakClassName='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300'
                    activeLinkClassName='bg-main text-white'
                    forcePage={force}
                />
            </nav></>}
    </>
}

