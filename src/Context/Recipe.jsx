import React, { useEffect, useState, useContext, createContext } from "react";

export const RecipeContext = createContext(null);

export const useRecipe = () => useContext(RecipeContext);

export const RecipeProvider = (props) => {

    const getrecipe=()=>{
        
    }
 

  return (
    <RecipeContext.Provider value={{getrecipe}} >
      {props.children}
    </RecipeContext.Provider>
  );
};
