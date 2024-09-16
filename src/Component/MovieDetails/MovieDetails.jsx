import React, { useContext, useEffect, useState } from 'react'
import style from './MovieDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { APIContext } from '../../Context/Apicontext'
import Loading from '../Loading/Loading'


export default function MovieDetails() {
    let { id } = useParams()
    let { getDetails, Details } = useContext(APIContext)
    useEffect(() => {
        getDetails(id)
    }, [])


    return <>
        {!Details?.backdrop_path ? <Loading /> : <>
            <div style={{ backgroundImage: `linear-gradient(rgba(36, 44, 55, 0.738), rgba(36, 44, 55, 0.823)),url('${`https://image.tmdb.org/t/p/original` + Details?.backdrop_path}}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-screen min-h-screen xl:h-screen text-white p-5 md:p-10 xl:p-0 overoverflow-hidden' >
                <div className={`container w-5/6 py-10 relative flex items-center h-full`}>
                    <div className="logo flex gap-3 items-center text-white absolute xl:top-10 top-0 left-0 text-xs md:text-sm container">
                        <Link to={'/'}>
                            <div className='flex items-center'><h1>THEMOVIE</h1><h1 className='font-bold text-pink-500'>BOX</h1></div>
                        </Link>

                    </div>
                    <div className='flex py-10 flex-wrap container gap-10 justify-center xl:justify-start'>
                        <div className='rounded-md xl:w-1/4 w-3/4 md:w-2/4'>
                            <div className=' relative'>
                                <img src={`https://image.tmdb.org/t/p/original` + Details?.poster_path} className='rounded-md w-full' alt={Details.title} />
                                <div onClick={() => {
                                    window.location = `${Details.homepage}`
                                }} className='w-20 h-20 absolute flex items-center justify-center border-4 border-solid border-white rounded-full bottom-[50%] translate-y-1/2 translate-x-1/2 right-[50%] cursor-pointer'>
                                    <i className="fa-solid fa-play text-white ms-1 text-3xl"></i>
                                </div>
                            </div>

                        </div>
                        <div className='xl:w-2/4  py-10 '>
                            <h1 className='uppercase'>{Details?.title}</h1>
                            <div className='mt-5 flex gap-5 items-center flex-wrap'>
                                <span className='bg-pink-500 text-xs px-3 py-1 font-bold'>PG 18</span>
                                <span className='text-md uppercase'>{Details?.genres.map((G, index) => <span className='me-1' key={index}>{index > 0 ? ', ' : ''}{G.name}</span>)}</span>
                                <span className='text-md uppercase'><i className="fa-solid fa-calendar-days me-2 text-pink-500"></i>{(Details?.release_date)?.split('-').slice(0, 1)}</span>
                                <span className='text-md uppercase'><i className="fa-regular fa-clock text-pink-500 me-2"></i>{Details?.runtime} min</span>
                            </div>
                            <p className='my-8'>{Details?.overview}</p>
                            <div className='bg-[#242c37] flex  p-5 border-solid border-2 border-pink-500 items-center xl:w-3/4 flex-wrap justify-center md:justify-between gap-5'>
                                <div className='flex gap-5'>
                                    <span className='flex flex-col items-center hover:text-pink-500  transation-mine cursor-pointer '>
                                        <i className="fa-solid fa-share-nodes text-xl"></i>
                                        Share
                                    </span>
                                    <span className='h-14 w-[2px] bg-white'>

                                    </span>
                                    <div className=''>
                                        <h2 className='font-bold'>Prime Video</h2>
                                        <span>Streaming Channels</span>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    window.location = `${Details?.homepage}`
                                }} className='border-solid border-2 justify-self-end border-pink-500 py-2 px-6 rounded-3xl flex items-center gap-3  hover:bg-pink-500 transation-mine'>
                                    <i className="fa-solid fa-play text-white ms-1 text-xl"></i>
                                    <span className='text-sm'>WATCH NOW</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>}

    </>
}

