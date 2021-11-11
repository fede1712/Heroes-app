import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = () => {
    let history = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Manolo'
            }
        })
        history('/dc')
    }


    return (
        <div className='container mt-5'>
            <h2>Login</h2>
            <hr />
            <button className='btn btn-primary' onClick={handleLogin}>
                login
            </button>
        </div>
    )
}
