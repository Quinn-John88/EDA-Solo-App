import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import '../RecipesPage/RecipePage.css'

function RecipesPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const recipes = useSelector(store => store.recipes)

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
    }, [])
    const handleClick = (recipe) => {
        dispatch({ type: 'SET_DETAILS', payload: recipe.id });
        history.push('/details')
    }

    return (
        <div className="container">
            {recipes.map(recipe => {
                return (
                    <div className='recipeCard' key={recipe.id} onClick={() => handleClick(recipe)}>
                        <h4>{recipe.title}</h4>
                            <p>{recipe.description}</p> 
                    </div>
                )
            })}
        </div>
    );
}

export default RecipesPage;
