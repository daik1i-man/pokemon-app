import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import IsLoader from '../components/isLoader/isLoader';

export default function PagesLayout() {

    const CurrentPage = lazy(() => import("../pages/CurrentPage/CurrentPage"));
    const NextPage = lazy(() => import("../pages/NextPage/NextPage"));
    const PokemonPage = lazy(() => import("../pages/PokemonPage/PokemonPage"));
    const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

    return (
        <Suspense fallback={<IsLoader />}>
            <Routes>
                <Route path='/' element={<CurrentPage />} />
                <Route path='/next' element={<NextPage />} />
                <Route path='/pokemon/:name' element={<PokemonPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

