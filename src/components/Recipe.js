import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Recipe = () => {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null)
    const url = "https://recipes.devmountain.com"

    useEffect(() => {
        axios.get(`${url}/recipes/${id}`)
            .then(res => setRecipe(res.data))
    },[])
    return(
        <div>
            {recipe ? recipe.recipe_name : null}
        </div>
    )
}

export default Recipe