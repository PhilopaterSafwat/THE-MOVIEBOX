import React, { useContext, useEffect, useState } from 'react'
import style from './SearchPages.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { APIContext } from '../../Context/Apicontext'

export default function SearchPages() {
    let { Search } = useContext(APIContext)
    let [nummm, setnummm] = useState()
    let navigate = useNavigate()
    let {id,searchN} = useParams()
    const [pageRange, setPageRange] = useState(5)


    useEffect(() => {
        setnummm(id);
        Search(searchN, id)
    }, [id, searchN])

    useEffect(() => {
        Search(searchN, id)
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

