import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import '../RecipeDetails/RecipeDetails.css'

function MovieDetails() {
    const dispatch = useDispatch();

    const history = useHistory();

    const recipe = useSelector(store => store.details);

    console.log(recipe);

    const handleClick = () => {
        history.push('/recipes')
    }
    return (
        <div className="recipeDetails" key={recipe.id} >
            <img className="recipeDetailsImage" style={{ width: 200, height: 200, marginTop: 45}} src={recipe.poster}></img>
            <h3>{recipe.title}</h3>
            <IconButton onClick={handleClick}><UndoIcon/>Return</IconButton>
            <h2>Ingredients</h2>
            <p>{recipe.ingredients_list}</p>
            <h2>Cooking Instrucitons</h2>
            <p>{recipe.cooking_directions}</p>
        </div>
    )
}

export default MovieDetails; 