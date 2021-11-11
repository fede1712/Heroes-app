import React, { useState } from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

    const [results, setResults] = useState(heroes)
    const [formValue, setFormValue] = useState('')


    const filteredResults = (name) => heroes.filter(elm => elm.superhero.toLowerCase().includes(name.toLowerCase()))

    const handleChange = (e) => {
        const { value } = e.target
        setFormValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setResults(filteredResults(formValue))
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <h4>Search Form</h4>
                        <form onSubmit={handleSubmit}>

                            <input
                                type='text'
                                className='form-control'
                                placeholder='Find your Hero'
                                onChange={handleChange}

                            />
                            <button type='submit'>Buscar</button>
                        </form>
                    </div>
                    <div className='col-7'>
                        <h4>Results</h4>
                        <hr />
                        {results.map(elm => <HeroCard {...elm} key={elm.id} />)}
                    </div>

                </div>
            </div>
        </div>
    )
}
