import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
    const {recipe_name, recipe_id} = recipe
    return(
        <div>
            {recipe_name}
            <NavLink to={`/recipe/${recipe_id}`}>See Recipe Details</NavLink>
        </div>
    )
}

export default RecipeCard