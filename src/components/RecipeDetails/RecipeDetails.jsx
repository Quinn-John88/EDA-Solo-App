import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../RecipeDetails/RecipeDetails.css'

function MovieDetails() {

    const history = useHistory();
    const recipe = useSelector(store => store.details);
    console.log(recipe);
    const handleClick = () => {
        history.push('/recipes')
    }
    return (
        <div className="recipeDetails" key={recipe.id} >
            <img style={{ width: 200, height: 200, marginTop: 45 }} src={recipe.poster}></img>
            <h3>{recipe.title}</h3>
            <button onClick={handleClick}>Back To List</button>
            <h2>Ingredients</h2>
            <p>{recipe.ingredients_list}</p>
            <h2>Cooking Instrucitons</h2>
            <p>{recipe.cooking_directions}</p>

        </div>
    )
}

export default MovieDetails; 