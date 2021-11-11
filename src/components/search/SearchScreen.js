import React from 'react'
import { useNavigate, generatePath } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

    const herosFiltered = heroes

    const [formValues, handleInputChange] = useForm({ searchText: '' })

    const { searchText } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const useNavigateParams = () => {
        const navigate = useNavigate();

        return (url, params) => {
            const path = generatePath(":url?:queryString", {
                url,
                queryString: params
            });
            navigate(path);
        };
    };
    const navigate = useNavigateParams();
    const navigateHandler = () => {
        navigate(`?=${searchText}`);
    };


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <h4>Search Form</h4>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="searchText" value={searchText} placeholder='Find your Hero' className='form-control' onChange={handleInputChange} />
                            <button type='submit' className='btn btn-outline-primary m-1 btn-block' onClick={navigateHandler}>Search</button>
                        </form>
                    </div>
                    <div className='col-7'>
                        <h4>Results</h4>
                        <hr />
                        {herosFiltered.map(elm => <HeroCard key={elm.id} {...elm} />)}

                    </div>

                </div>
            </div>
        </div>
    )
}
