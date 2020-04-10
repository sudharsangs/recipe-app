import React from 'react'
import styles from './Recipe.module.css'


const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <img src={image} className={styles.imgClass} alt="Recipe Image"/>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p><span>Calories: </span>{Math.floor(calories)}</p>
        </div>
    );
}

export default Recipe;