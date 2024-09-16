import React, { useContext, useEffect } from 'react'
import style from './Header.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { APIContext } from '../../Context/Apicontext';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {
    let { popularData } = useContext(APIContext)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
    }
    return <>
        <div className='w-full h-screen relative overflow-hidden'>
            <Slider {...settings} className='overflow-hidden'>
                {popularData?.map((item) => <div className='relative' key={item.id}>
                    <div>
                        <LazyLoadImage
                            alt={item.title +' image'}
                            className='object-cover w-full h-screen object-top'
                            src={`https://image.tmdb.org/t/p/original` + item.backdrop_path}
                            effect='opacity'
                            width={`100%`}
                            />
                            {/* <img src={`https://image.tmdb.org/t/p/original` + item.backdrop_path} className='object-cover w-full h-screen object-top' alt={item.title +' image'}/> */}
                    </div>
                    <div className='container  lg:p-10 absolute lg:bottom-0  lg:left-20 bottom-1/2 left-1/2 translate-x-[-50%] translate-y-1/2 flex flex-col items-center lg:block lg:translate-x-0 lg:translate-y-0'>
                        <h2 className='text-4xl text-white uppercase text-center lg:text-start'>{item.title}</h2>
                        <div className='my-5  flex flex-col items-center lg:block gap-6'>
                            <Link to={`movieDetails/${item.id}`}><button type="button" className="text-white border-2 border-pink-500 bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 transation-mine w-fit">WATCH MOVIE</button></Link>
                            <Link to={`movieDetails/${item.id}`}><button type="button" className="text-white  border-2 border-white hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-sm text-sm lg:px-5 py-2.5 px-[34px] text-center me-2 mb-2 bg-transparent transation-mine">VIEW INFO</button></Link>
                        </div>
                    </div>
                </div>)}
            </Slider>
            <div className='absolute xl:top-10 top-10 left-0 text-xs md:text-sm container lg:p-10 p-5 lg:px-24' >
                <div className="logo flex gap-3 items-center text-white ">
                    <Link to={'/'}>
                        <div className='flex items-center'><h1>THEMOVIE</h1><h1 className='font-bold text-pink-500'>BOX</h1></div>
                    </Link>

                </div>

            </div >

        </div>
    </>
}

