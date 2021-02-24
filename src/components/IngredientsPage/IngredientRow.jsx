import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function IngredientRow({ ingredient }) {

    const users = useSelector(store => store.user)
    //const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false)

    const [count, setCount] = useState(ingredient.count)

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
            <td>{ingredient.categoryName}</td>
            <td>{ingredient.count}</td>
            {!isEditing ?
                <td><button onClick={handleEdit}>Edit</button><button onClick={() => handleDelete(ingredient.id)}>Delete</button></td> :
                <td><input value={count} onChange={(e) => setCount(e.target.value)} /><button onClick={editSubmit}>Save</button></td>
            }
        </tr>
    )
}
export default IngredientRow;