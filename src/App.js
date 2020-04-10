import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import styles from './App.module.css';

function App(){

    const APP_ID = 'd4b62089';
    const APP_KEY = '7d6510ed2a5da4bb9a8ce1e32bf818a2';

    const [recipes, setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query, setQuery] = useState('banana');

    const getRecipies = async () => {
        const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const response = await axios.get(url);
        setRecipes(response.data.hits);
        console.log(response.data.hits);
    }

    useEffect( () => {
        getRecipies();
    },[query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div className={styles.App}>
            <form onSubmit={getSearch} className={styles.searchForm}>
                <input 
                    type="text" 
                    className={styles.searchBar} 
                    value={search} 
                    onChange={updateSearch}
                    placeholder="Enter any ingredient to search recipes"
                />
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
            <div className={styles.recipes}>
            {recipes.map(recipe => (
                <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                     />
            ))}
            </div>
        </div>
    )
}

export default App;