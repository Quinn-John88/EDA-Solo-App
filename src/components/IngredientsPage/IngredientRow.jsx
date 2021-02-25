import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        console.log(IngredientCategory)
    }

    categorySet(IngredientCategory);

    const handleDelete = (id) => {
        //delete ingredient
        dispatch({ type: 'DELETE_INGREDIENT', payload: id });
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
        dispatch({ type: 'UPDATE_INGREDIENT', payload: countObj })
    }
    return (
        <tr key={ingredient.id}>
            <td>{ingredient.name}</td>
            <td>{IngredientCategory}</td>
            <td>{ingredient.count}</td>
            {!isEditing ?
                <td><button onClick={handleEdit}>Edit</button><button onClick={() => handleDelete(ingredient.id)}>Delete</button></td> :
                <td><input value={count} onChange={(e) => setCount(e.target.value)} /><button onClick={editSubmit}>Save</button></td>
            }
        </tr>
    )
}
export default IngredientRow;