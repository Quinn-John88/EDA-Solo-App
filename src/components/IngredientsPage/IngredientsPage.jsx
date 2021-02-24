import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IngredientForm from './IngredientForm.jsx';
import IngredientRow from './IngredientRow.jsx'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function IngredientsPage() {

  const ingredients = useSelector(store => store.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_INGREDIENTS' });
    dispatch({ type: 'FETCH_ALL_INGREDIENTS' })
    dispatch({ type: 'FETCH_CATEGORIES' })
  }, [])

  return (
    <div className="container">
      <IngredientForm />
      <table className='ingredientsTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Count</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(ingredient => {
            return (
              <IngredientRow
                key={ingredient.id}
                ingredient={ingredient}
              />
            )
          })}
        </tbody>
      </table>
    </div>)
}

export default IngredientsPage;
