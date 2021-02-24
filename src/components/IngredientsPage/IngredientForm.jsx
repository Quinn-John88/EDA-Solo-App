import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

    return (
        <form>
            <select value={newIngredient} onChange={(e) => setnewIngredient(e.target.value)}>
                <option >Select Ingredient</option>
                {allIngredients.map((eachIngredient, i) => <option key={i} value={eachIngredient.id}>{eachIngredient.name}</option>)}
            </select>
            <input id="countInput" placeholder='count' value={newIngredientCount} onChange={(e) => setNewIngredientCount(e.target.value)} />
            <button onClick={handleSubmit}>Add Ingredient</button>
        </form>
    )
}
export default IngredientForm;