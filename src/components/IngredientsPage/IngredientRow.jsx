import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Swal from 'sweetalert2'
import '../IngredientsPage/Ingredients.css'

function IngredientRow({ ingredient }) {

    const users = useSelector(store => store.user);

    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);

    const [count, setCount] = useState(ingredient.count);

    let IngredientCategory = ingredient.category_id;

    const categorySet = () => {
        if (IngredientCategory === 1) {
            IngredientCategory = "Fruit";
        } else if (IngredientCategory === 2) {
            IngredientCategory = "Vegetable";
        } else if (IngredientCategory === 3) {
            IngredientCategory = "Grain";
        } else if (IngredientCategory === 4) {
            IngredientCategory = "Protien";
        } else if (IngredientCategory === 5) {
            IngredientCategory = "Dairy";
        } else if (IngredientCategory === 6) {
            IngredientCategory = "Spice";
        } else if (IngredientCategory === 7) {
            IngredientCategory = "Sauce";
        } else if (IngredientCategory === 8) {
            IngredientCategory = "Seasoning";
        } else if (IngredientCategory === 9) {
            IngredientCategory = "Additive";
        } else {
            IngredientCategory = "Soups";
        }
    }

    categorySet(IngredientCategory);

    const handleDelete = (id) => {
        //delete ingredient
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
                dispatch({ type: 'DELETE_INGREDIENT', payload: id });
                Swal.fire(
                    'Deleted!',
                    'Ingredient deleted.',
                    'success'
                )
            }
        })
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const editSubmit = () => {
        setIsEditing(false);
        const countObj = {
            id: ingredient.id,
            count: count,
            user_id: users.id,
        }
        Swal.fire({
            icon: 'success',
            title: 'Saved!',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch({ type: 'UPDATE_INGREDIENT', payload: countObj })
    }

    return (
        <TableRow key={ingredient.id}>
            <TableCell align="center">{ingredient.name}</TableCell>
            <TableCell align="center">{IngredientCategory}</TableCell>
            <TableCell align="center">{ingredient.count}</TableCell>
            {!isEditing ?
                <TableCell align="center"><IconButton className='ingredientButtonControls' variant="contained" color="default" onClick={handleEdit}><CreateIcon /></IconButton><IconButton className='ingredientButtonControls' variant="contained" color="secondary" onClick={() => handleDelete(ingredient.id)}><DeleteForeverIcon /></IconButton></TableCell> :
                <TableCell align="center"><TextField className="ingredientEditText" variant="outlined" label='Count' value={count} onChange={(e) => setCount(e.target.value)} /><IconButton className='ingredientSaveButton' variant="contained" color="primary" onClick={editSubmit}><SaveAltIcon /></IconButton></TableCell>
            }
        </TableRow>
    )
}
export default IngredientRow;