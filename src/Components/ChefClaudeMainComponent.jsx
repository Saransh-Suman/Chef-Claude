import React, { useEffect, useRef, useState } from "react"
import ClaudeRecipeComponent from "./ClaudeRecipeComponent"
import IngredientsListComponent from "./IngredientsListComponent"
import { HfInference } from "@huggingface/inference"
import {getRecipeFromMistral} from "./ai"
export default function ChefClaudeMainUsingRefs() {

    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipe, setRecipe] = useState("")
    
    async function getRecipe() {
        // setRecipeShown(prevShown => !prevShown)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)

        setRecipe(prevRecipe => recipeMarkdown)
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    // Defining refs here
    const recipeSection = useRef(null)

    // Adding side effects to scroll into view
        useEffect(function(){
            if(recipe!=="" && recipeSection!==null)
                recipeSection.current.scrollIntoView({behaviour:"smooth" ,block:"start"})
        },[recipe])



    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && 
            <IngredientsListComponent 
                getRecipe = {getRecipe} 
                ingredients = {ingredients} 
                ingredientsListItems = {ingredientsListItems}
                ref = {recipeSection}
            />}
            {recipe && <ClaudeRecipeComponent recipe = {recipe}/>}
        </main>
    )
}