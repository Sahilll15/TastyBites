import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue } from '@mui/material/colors';
import { toast } from 'react-toastify';





const RecipeCard = (props) => {
    const {recipe}=props;

    const handlefav=()=>{
        const fav=JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

        const recipeExists=fav.some(recipe=>recipe.id==='recipeId');

        if(!recipeExists){
            fav.push(recipe);
            localStorage.setItem('favoriteRecipes',JSON.stringify(fav));
            toast.success('Added to favourite')
        }

    }
    return (
        <Card sx={{ maxWidth: 345 }} style={{margin:'50px'}}>
      <CardMedia
        sx={{ height: 230 }}
        image={`${recipe.display.images}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.display.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {recipe.content.details.attribution && recipe.content.details.attribution.text}

        </Typography>
      </CardContent>
      <CardActions>
      

        <Button size="small" style={{marginLeft:'20px'}}><NavLink style={{textDecoration:'none',color:'black'}} to={recipe.content.details.directionsUrl} target="_blank">Learn More</NavLink></Button>
        <Button size="small" onClick={handlefav} ><FavoriteIcon /></Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard;
