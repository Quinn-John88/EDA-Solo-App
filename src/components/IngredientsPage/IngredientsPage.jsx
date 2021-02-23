import  { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function IngredientsPage() {
  const dispatch = useDispatch();

  const ingredients = useSelector(store => store.ingredients)
  const allIngredients = useSelector(store => store.allIngredients)

  const [newIngredient, setnewIngredient] = useState('')

  useEffect(() => {
    dispatch({ type: 'FETCH_INGREDIENTS' });
    dispatch({ type: 'FETCH_ALL_INGREDIENTS' })
  }, [])
  const handleSubmit = () => {
    //add new ingredient
    if(!newIngredient) {
      alert('Please Select An Ingredient To Add')
      return;
    }
    const newIngredientToAdd = {
      //ingredient_user.ingredient (id or name)
    }
  }
  const handleDelete = () => {
    //delete ingredient
  }

  return (
    <div className="container">
      <form>
        <select value={newIngredient} onChange={(e) => setnewIngredient(e.target.value)}>
          <option value="" disabled selected>Select Ingredient</option>
          {allIngredients.map((eachingredient , i) => <option key={i} value={eachingredient.id}>{eachingredient.name}</option>)}
        </select>
        <button onClick={handleSubmit}>Add Ingredient</button>
      </form>
      {ingredients.map(ingredient => {
        return (
          <div key={ingredient.id}>
            <p>{ingredient.name}</p>
            <p>{ingredient.category_id}</p>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default IngredientsPage;
