import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../RecipesPage/RecipePage.css'

function RecipesPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const recipes = useSelector(store => store.recipes)

    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
    }, [])
    const handleClick = (recipe) => {
        dispatch({ type: 'SET_DETAILS', payload: recipe });
        history.push('/details')
    }
    return (
        <div className="recipeContainer">
            {recipes.map(recipe => {
                return (
                    <>
                        <Card className='recipeCard' key={recipe.id} onClick={() => handleClick(recipe)}>
                            <img style={{ width: 100, height: 100 }} src={recipe.poster}></img>
                            <h5 style={{ maxWidth: 100 }}>{recipe.title}</h5>
                            <IconButton onClick={() => dispatch({ type: 'ADD_FAVORITE', payload: recipe.id })}><FavoriteIcon /></IconButton>
                        </Card>
                    </>
                )
            })}
        </div>
    );
}

export default RecipesPage;
