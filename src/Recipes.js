import React from 'react';
import style from './Recipes.module.css'
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h3>{title}</h3>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories: {Math.round(calories)}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;