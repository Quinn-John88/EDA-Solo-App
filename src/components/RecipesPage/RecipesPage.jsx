import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Swal from 'sweetalert2'
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

    const addFav = (recipe) => {
        Swal.fire({
            icon: 'success',
            title: 'Added To Favorites!',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch({ type: 'ADD_FAVORITE', payload: recipe.id })
    }
    return (
        <div className="recipeContainer">
            {recipes.map(recipe => {
                return (
                    <div  key={recipe.id} className="recipeDiv">
                        <Card className='recipeCard' key={recipe.id} onClick={() => handleClick(recipe)}>
                            <img style={{ width: 100, height: 100 }} src={recipe.poster}></img>
                            <h5 style={{ maxWidth: 100 }}>{recipe.title}</h5>
                        </Card>
                        <IconButton style={{ textAlign: "left" }} onClick={() => addFav(recipe)}><FavoriteIcon /></IconButton>
                    </div>
                )
            })}
        </div>
    );
}

export default RecipesPage;
