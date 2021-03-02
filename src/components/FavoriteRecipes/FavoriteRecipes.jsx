import Card from '@material-ui/core/Card';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import '../FavoriteRecipes/FavoriteRecipes.css'

function FavoriteRecipeList() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favoriteRecipes);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
    }, [])

    console.log(favorites);

    const handleClick = (favorite) => {
        dispatch({ type: 'SET_DETAILS', payload:favorite })
        history.push('/details')
    }

    return (
        <div className="favoritesContainer">
            {favorites.map(favorite => {
                return (
                    <Card className='recipeCard' key={favorite.id} onClick={() => handleClick(favorite)}>
                        <img style={{ width: 100, height: 100 }} src={favorite.poster}></img>
                        <h5 style={{ maxWidth: 100 }}>{favorite.title}</h5>
                    </Card>
                )
            })}
        </div>
    )
}
export default FavoriteRecipeList;