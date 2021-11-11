import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'
import './HeroesList.css'

export const HeroesList = ({ publisher }) => {


    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <>
            <div className='container animate__animated animate__fadeIn'>
                <div className='row d-flex justify-content-center'>
                    {heroes.map(elm =>
                        <HeroCard key={elm.id} {...elm} />
                    )}
                </div>
            </div>
        </>
    )
}
