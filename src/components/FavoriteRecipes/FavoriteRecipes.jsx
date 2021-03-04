import Card from '@material-ui/core/Card';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import Swal from 'sweetalert2'
import '../FavoriteRecipes/FavoriteRecipes.css'

function FavoriteRecipeList() {
    const dispatch = useDispatch();

    const favorites = useSelector(store => store.favoriteRecipes);

    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
    }, [])

    const handleClick = (favorite) => {
        dispatch({ type: 'SET_DETAILS', payload: favorite })
        history.push('/details')
    }
    const deleteFav = (favorite) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: 'DELETE_FAVORITE', payload: favorite.id })
                Swal.fire(
                    'Deleted!',
                    'This favorite has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="favoritesContainer">
            {favorites.map(favorite => {
                return (
                    <div key={favorite.id}>
                        <Card className='recipeCard' onClick={() => handleClick(favorite)}>
                            <img style={{ width: 100, height: 100 }} src={favorite.poster}></img>
                            <h5 style={{ maxWidth: 100 }}>{favorite.title}</h5>
                        </Card>
                        <IconButton onClick={() => deleteFav(favorite)}><HighlightOffIcon /></IconButton>
                    </div>
                )
            })}
        </div>
    )
}
export default FavoriteRecipeList;