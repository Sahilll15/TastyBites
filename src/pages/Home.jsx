import  { useEffect, useState } from 'react'
import { useFirebase } from '../Context/Firebase'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecipe } from '../Context/Recipe';
import axios from 'axios';
import * as React from 'react';
import RecipeCard from '../components/Card';




const Home = () => {
    const Firebase = useFirebase();
    const Recipe = useRecipe();
    const [recipe, setrecipe] = useState([])
    const [isLoading,setisLoading]=useState(false)
    const getRecipe = async () => {
        setisLoading(true);

        const options = {
          method: 'GET',
          url: 'https://yummly2.p.rapidapi.com/feeds/list',
          params: {
            limit: '24',
            start: '0'
          },
          headers: {
            'X-RapidAPI-Key': '03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3',
            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          
            setrecipe(response.data.feed);
            console.log(response.data.feed);
            setisLoading(false);
        } catch (error) {
          console.error(error);
          setisLoading(true);
        }
        
       
          
    }

    useEffect(() => {
   getRecipe();
    }, [])
 
   

    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>

        {
            isLoading?<h1>Loading...</h1>:
            recipe.map((item,index)=>{
                return <RecipeCard recipe={item} key={index} />
            })
        }
       
       
        </div>
       

    )
}

export default Home;