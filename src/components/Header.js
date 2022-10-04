import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return(
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/auth'>
                Auth
            </NavLink>
        </nav>
    )
}

export default Header