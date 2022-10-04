import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        // put logic here to login/register, axios request
        navigate('/')
    }

    return(
        <div>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default Auth