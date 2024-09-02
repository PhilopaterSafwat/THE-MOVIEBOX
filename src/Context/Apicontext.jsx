import axios from "axios";
import React, { Children, createContext, useState } from "react";


export let APIContext = createContext(null);

export default function APIContextProvider({ children }) {
    const [popularData, setPopularData] = useState(null);
    const [Details, setDetails] = useState(null);
    const [PageA, setPage] = useState(null);
    const [nav, setnav] = useState(null);
    const [search, setsearch] = useState(null);

    async function getPopular() {
        try {
            const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
                params: { language: 'en-US', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setPopularData(data.results)
        } catch (error) {
            console.log(`popularData` + error);

        }

    }
    async function Page(url, page) {
        try {
            const { data } = await axios.get(`${url}`, {
                params: { language: 'en-US', page },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setPage(data)
        } catch (error) {
            console.log(`page` + error);

        }

    }
    async function getDetails(id) {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: { language: 'en-US' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setDetails(data)
        } catch (error) {
            console.log(`setDetails` + error);

        }

    }
    async function toprated(page) {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
                params: { language: 'en-US', page },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setPopularData(data.results)
        } catch (error) {
            console.log(`toprated` + error);

        }

    }
    async function New(page) {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
                params: { language: 'en-US', page },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setPopularData(data.results)
        } catch (error) {
            console.log(`toprated` + error);

        }

    }
    async function Comming(page) {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
                params: { language: 'en-US', page },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setPopularData(data.results)
        } catch (error) {
            console.log(`toprated` + error);

        }

    }
    async function Search(query, page) {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: { query, language: 'en- US', page, include_adult: 'false' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcyYmM0MmQ3YmI0ZDI3NmY1MzU2MjY4YmQzNGMyNSIsIm5iZiI6MTcyNDg0Njc2OC42NjQ4MDYsInN1YiI6IjY2Y2YxMDc0ODhhZDVhYWM1NWJkODQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os8PGHbAbmugpztLgy08HNxxNBKSvLgHPk4LZn3Cuww'
                }
            });
            setsearch(data)
        } catch (error) {
            console.log(`Search` + error);

        }

    }
    return <APIContext.Provider value={{ getPopular, popularData, getDetails, Details, PageA, Page, toprated, setnav, nav, New, Comming, Search, search }}>
        {children}
    </APIContext.Provider>
}

