import React, { useState } from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { filteredResults } from '../selectors/getHeroesByName'

export const SearchScreen = () => {

    const [results, setResults] = useState(heroes)
    const [formValue, setFormValue] = useState('')

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
                        <hr />

                        <form onSubmit={handleSubmit}>

                            <input
                                type='text'
                                className='form-control'
                                placeholder='Find your Hero'
                                onChange={handleChange}

                            />
                            <button type='submit' className='btn btn-outline-info mt-3'>Buscar</button>
                        </form>
                    </div>
                    <div className='col-7'>
                        <h4>Results</h4>
                        <hr />
                        {formValue === '' && <div className='alert alert-info' role='alert'>
                            Search your hero
                        </div>}

                        {
                            (formValue !== '' && results.length === 0)
                            &&
                            <div className='alert alert-danger' role='alert'>
                                There is no a hero with that {formValue}
                            </div>
                        }
                        {
                            (results.length >= 1)
                            &&
                            results.map(elm => <HeroCard {...elm} key={elm.id} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
