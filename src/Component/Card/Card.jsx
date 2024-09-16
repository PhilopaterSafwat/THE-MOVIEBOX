import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { AttentionSeeker, Fade, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal'
export default function Card({ data, index }) {
    
    return <>
        <div className='w-full p-5 md:w-1/2 lg:w-1/3 xl:w-1/4 hover:scale-110 transation-mine flex flex-col'>
            <Fade>
                <Link to={`/movieDetails/${data.id}`}>
                    <div className='min-h-[390px]'>
                        <img loading='lazy' src={`https://image.tmdb.org/t/p/original` + data?.poster_path} className='w-full md:h-[390px]' alt={data?.title} />
                    </div>
                </Link>
                <div className='info flex items-center justify-between p-4 shadow-lg'>
                    <div>
                        <h2 className='text-xl xl:text-2xl'>{(data.title).split(' ').slice(0, 2).join(' ')}</h2>
                        <span className='text-sm xl:text-md text-gray-400'>{(data.release_date).split('-').slice(0, 1)}</span>
                    </div>
                    <span className='border-2 boreder-solid rounded-md border-[#ff0079] px-3 py-1'>
                        {(data.vote_average).toString().split('').slice(0, 3).join('')}
                    </span>
                </div>
            </Fade>
        </div>

    </>
}

