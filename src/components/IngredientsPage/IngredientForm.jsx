import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';

import '../IngredientsPage/Ingredients.css'

function IngredientForm() {

    const dispatch = useDispatch();

    const allIngredients = useSelector(store => store.allIngredients);

    const [newIngredient, setnewIngredient] = useState('');

    const [newIngredientCount, setNewIngredientCount] = useState('');

    const handleSubmit = () => {
        //add new ingredient
        const newIngredientAdd = {
            ingredient_id: newIngredient,
            count: newIngredientCount,
        }
        if (!newIngredient) {
            alert('Please Select An Ingredient To Add');
            return;
        } else if (!newIngredientCount) {
            alert('Please Add Amount');
            return;
        } else {
            dispatch({ type: 'ADD_INGREDIENT', payload: newIngredientAdd });
            setnewIngredient('');
            setNewIngredientCount('')
        }
    }
    //{allIngredients.map((eachIngredient, i) => <option key={i} value={eachIngredient.id}>{eachIngredient.name}</option>)}

    return (
        <form className="ingredientForm">
            <Box display="flex" justifyContent="center">
                <Autocomplete
                    value={newIngredient}
                    onChange={(e) => setnewIngredient(e.target.value)}
                    options={allIngredients}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 200, marginRight: 5 }}
                    renderInput={(params) => <TextField {...params} label="Ingredient" variant="outlined" />}
                />
                <TextField style={{ width: 200, marginRight: 5, height: 50 }} id="countInput" variant="outlined" label="Count" value={newIngredientCount} onChange={(e) => setNewIngredientCount(e.target.value)} />
                <Button style={{ width: 100, height: 55}} variant="contained" color="primary" onClick={handleSubmit}>Add<SendIcon style={{margin:10}}/></Button>
            </Box>
        </form>
    )
}
export default IngredientForm;