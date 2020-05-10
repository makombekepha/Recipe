import React, {useEffect, useState} from 'react';
import "./App.css";
import Recipe from "./Recipes";

const App =()=>{

  const APP_ID ="fd7fe0be";
  const APP_KEY = "dd16c7b75539f4d9166456ae792c40a0";
  
const [recipes, setRecipes]=useState([]);
const [search, setSearch]=useState(''); 
const  [query, setQuery]=useState();


  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes= async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json(); 
    setRecipes(data.hits)
    
  };
     
   const updateSearch=e=>{
     setSearch(e.target.value ) 
   }

   const getSearch=e=>{
    e.preventDefault(); 
    setQuery(search ) 
    setSearch(' ')
   }
  return(
    <div className="App">

       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
         <button className="search-button" type="submit">Search</button>
       </form>
       <div className="recipes">
       {recipes.map(recipe=>(
         <Recipe 
           key={recipe.recipe.image}
         title={recipe.recipe.label}
          calories={recipe.recipe.calories}
            image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
            />
       ))}; 
       </div>
    </div>
  );

};

export default App;
