import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddRecipe() {

    const dispatch = useDispatch();

    const recipes = useSelector(store => store.recipes);
    
    const [newIngredientToAdd, setNewIngredientToAdd] = useState(false);

    const [newRecipeIngredientName, setNewRecipeIngredientName] = useState('');

    const [newRecipeIngredientCategory, setNewRecipeIngredientCategory] = useState('');

    const [newRecipeTitle, setNewRecipeTitle] = useState('')

    const [newRecipeDescription, setNewRecipeDescription] = useState('');

    const [newRecipeIngredientList, setNewRecipeIngredientList] = useState('');

    const [newRecipeCookingDirections, setNewRecipeCookingDirections] = useState('');

    const [newRecipePoster, setNewRecipePoster] = useState('');

    return (
        <form>
            <input type='text' value={newRecipeIngredientName} onChange={ (event) => setNewRecipeTitle(event.target.value)}></input>
            <input type='text' value={newRecipeIngredientCategory} onChange={ (event) => setNewRecipeIngredientCategory(event.target.value)}></input>

            <input type='text' value={newRecipeTitle} onChange={ (event) => setNewRecipeTitle(event.target.value)}></input>
            <textarea value={newRecipeDescription} onChange={ (event) => setNewRecipeDescription}></textarea>
            <textarea value={newRecipeIngredientList} onChange={(event) => setNewRecipeIngredientList}></textarea>
            <textarea value={newRecipeCookingDirections} onChange={(event) => setNewRecipeCookingDirections}></textarea>
            <input value={newRecipePoster} onChange={(event) => setNewRecipePoster}></input>
        </form>
    )
}
export default AddRecipe;