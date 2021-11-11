import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DaschboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-2'>
                <Routes>
                    <Route path='/marvel' element={<MarvelScreen />} />
                    <Route path='/hero/:heroid' element={<HeroesScreen />} />
                    <Route path='/dc' element={<DcScreen />} />
                    <Route path='/search' element={<SearchScreen />} />
                    <Route path='*' element={<MarvelScreen />} />

                </Routes>
            </div>

        </>
    )
}
