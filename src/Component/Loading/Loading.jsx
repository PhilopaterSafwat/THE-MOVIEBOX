import React from 'react'
import style from './Loading.module.css'
import { Bars } from 'react-loader-spinner'
export default function Loading() {


    return <>
        <div className='flex fixed items-center justify-center top-0 bottom-0 left-0 right-0 bg-white z-50'>
            <Bars
                height="80"
                width="80"
                color="#ff0079"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    </>
}

