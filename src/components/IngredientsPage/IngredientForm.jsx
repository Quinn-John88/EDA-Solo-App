import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Swal from 'sweetalert2';
import '../IngredientsPage/Ingredients.css';

function IngredientForm() {

    const dispatch = useDispatch();

    const allIngredients = useSelector(store => store.allIngredients);

    const [newIngredient, setNewIngredient] = useState(0);

    const [newIngredientCount, setNewIngredientCount] = useState('');

    const handleSubmit = () => {
        //add new ingredient
        const newIngredientAdd = {
            ingredient_id: newIngredient,
            count: newIngredientCount,
        }
        if (!newIngredient) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Select An Ingredient!',
            })
            return;
        } else if (!newIngredientCount) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Add An Amount!',
            })
            return;
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Ingredient Added!',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch({ type: 'ADD_INGREDIENT', payload: newIngredientAdd });
            setNewIngredient('');
            setNewIngredientCount('')
        }
    }
    //{allIngredients.map((eachIngredient, i) => <option key={i} value={eachIngredient.id}>{eachIngredient.name}</option>)}

    return (
        <form className="ingredientForm">
            <Box display="flex" justifyContent="center">
                <Select
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    variant="outlined"
                    style={{ width: 200, marginRight: 5 }}
                    defaultValue={0}
                >
                    <InputLabel value={0}>Ingredient Name</InputLabel>
                    {allIngredients.map((eachIngredient, i) => <MenuItem key={i} value={eachIngredient.id}>{eachIngredient.name}</MenuItem>)}
                </Select>
                <TextField style={{ width: 200, marginRight: 5, height: 50 }} id="countInput" variant="outlined" label="Count" value={newIngredientCount} onChange={(e) => setNewIngredientCount(e.target.value)} />
                <Button style={{ width: 100, height: 55 }} variant="contained" color="primary" onClick={handleSubmit}>Add<SendIcon style={{ margin: 10 }} /></Button>
            </Box>
        </form>
    )
}
export default IngredientForm;