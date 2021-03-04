import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IngredientForm from './IngredientForm.jsx';
import IngredientRow from './IngredientRow.jsx'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../IngredientsPage/Ingredients.css'

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
    <>
      <IngredientForm />
      <div className="Ingredientcontainer">
        <Table className='ingredientsTable'>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.map(ingredient => {
              return (
                <IngredientRow
                  key={ingredient.id}
                  ingredient={ingredient}
                />
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )

}

export default IngredientsPage;
