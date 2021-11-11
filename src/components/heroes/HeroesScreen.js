import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById'
import './HeroesScreen.css'

export const HeroesScreen = () => {

    const navigate = useNavigate()
    const { heroid } = useParams()
    const hero = useMemo(() => getHeroesById(heroid), [heroid])

    if (!hero) {
        return <Navigate to='/' />
    }

    const handleReturn = () => {
        navigate('/');
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4'>
                    <img src={`../assets/heroes/${heroid}.jpg`} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
                </div>
                <div className='col-8'>
                    <h3>{superhero}</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                        <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                        <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
                        <li className='list-group-item'><b>Characters:</b> {characters}</li>
                    </ul>
                    <span as='button' className='badge rounded-pill bg-info text-light rtn-btn' onClick={handleReturn}>Return</span>
                </div>

            </div>
        </div >
    )
}
