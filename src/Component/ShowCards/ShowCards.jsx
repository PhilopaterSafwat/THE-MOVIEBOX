import React from 'react'
import style from './ShowCards.module.css'
import Card from '../Card/Card'


export default function ShowCards({ data }) {

    return <>
        <div className='container flex flex-wrap py-10'>
            {data?.map((item ,index) => <Card data={item} key={item.id} index={index} />)}
        </div>
    </>
}

