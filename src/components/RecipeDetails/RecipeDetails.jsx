import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


function MovieDetails() {

    const history = useHistory();
    const recipe = useSelector(store => store.details);
    console.log(recipe);
    return (
        <>
            <button onClick={() => history.push('/recipes')}>Back to List</button>
            <div key={recipe.id} >
                <h3>{recipe.title}</h3>
                <h2>Ingredients</h2>
                    <p>{recipe.ingredients_list}</p>
                <h2>Cooking Instrucitons</h2>
                    <p>{recipe.cooking_directions}</p>
            </div>
        </>
    )
}

export default MovieDetails; 