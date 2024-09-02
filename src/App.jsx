import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trending from './Component/Trending/Trending'
import TopRated from './Component/TopRated/TopRated'
import Layout from './Component/Layout/Layout'
import APIContextProvider from './Context/Apicontext'
import MovieDetails from './Component/MovieDetails/MovieDetails'
import Page from './Component/Page/Page'
import TopratedPages from './Component/TopratedPages/TopratedPages'
import New from './Component/New/New'
import NewPages from './Component/NewPages/NewPages'
import Comming from './Component/Comming/Comming'
import CommingPages from './Component/CommingPages/CommingPages'
import Search from './Component/Search/Search'
import SearchPages from './Component/SearchPages/SearchPages'

function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Trending /> },
        {
          path: "topRated", element: <TopRated />, children: [
            { path: "page/:id", element: <TopratedPages /> }
          ]
        },
        {
          path: "New", element: <New />, children: [
            { path: "page/:id", element: <NewPages /> }
          ]
        },
        {
          path: "Comming", element: <Comming />, children: [
            { path: "page/:id", element: <CommingPages /> }
          ]
        },
        {
          path: "search", element: <Search />, children: [
            { path: "page/:searchN/:id", element: <SearchPages /> }
          ]
        },
        { path: "page/:id", element: <Page /> },

      ]
    },
    { path: "movieDetails/:id", element: <MovieDetails /> },
  ])
  return <>
    <APIContextProvider>
      <RouterProvider router={routers} />
    </APIContextProvider>
  </>
}

export default App
