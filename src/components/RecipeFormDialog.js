import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  FormControl,
  Input,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from '@mui/material'

const RecipeFormDialog = ({ open, onClose }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    mainImage: '',
    preparationTime: null,
    cookingTime: null,
    calories: null,
    country: '',
    serves: 2,
    ingredients: [],
    steps: [],
    gallery: [],
    category: [],
    rating: null,
  })
  
  const styles = {
    container: {
      borderRadius: 50
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
    }
  }

  const handleTitleChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        title: event.target.value
      }
    })
  }

  const handlePrepTimeChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        preparationTime: event.target.value
      }
    })
  }

  const handleCookingTimeChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        cookingTime: event.target.value
      }
    })
  }

  const handleCaloriesChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        calories: event.target.value
      }
    })
  }

  const handleCountryChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        country: event.target.value
      }
    })
  }

  const handleServesChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        serves: event.target.value
      }
    })
  }

  const handleIngredientsChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        ingredients: event.target.value
      }
    })
  }

  const handleStepsChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        steps: event.target.value
      }
    })
  }

  const handleCategoryChange = (event) => {
    setNewRecipe(prevRecipe => {
      return {
        ...prevRecipe,
        category: event.target.value
      }
    })
  }
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      sx={styles.container}
    >
      <DialogTitle>
        <Typography>
          Add New Recipe
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={styles.formContainer}
      >
        <FormControl>
          <InputLabel htmlFor="title">Recipe name</InputLabel>
          <OutlinedInput 
            id="title"
            value={newRecipe.title}
            onChange={handleTitleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Preparation time</InputLabel>
          <Input 
            id="preparation-time"
            type="number"
            value={newRecipe.preparationTime}
            onChange={handlePrepTimeChange}
            endAdornment={<InputAdornment position="end">min</InputAdornment>}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Cooking time</InputLabel>
          <Input 
            id="cooking-time"
            type="number"
            value={newRecipe.cookingTime}
            onChange={handleCookingTimeChange}
            endAdornment={<InputAdornment position="end">min</InputAdornment>}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Calories</InputLabel>
          <Input 
            id="calories"
            type="number"
            value={newRecipe.calories}
            onChange={handleCaloriesChange}
            endAdornment={<InputAdornment position="end">kCal</InputAdornment>}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Country</InputLabel>
          <Input 
            id="country"
            value={newRecipe.country}
            onChange={handleCountryChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Serves</InputLabel>
          <Input 
            id="serves"
            type="number"
            value={newRecipe.serves}
            onChange={handleServesChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Ingredients</InputLabel>
          <Input 
            id="ingredients"
            value={newRecipe.ingredients}
            onChange={handleIngredientsChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Steps</InputLabel>
          <Input 
            id="steps"
            value={newRecipe.steps}
            onChange={handleStepsChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="">Category</InputLabel>
          <Input 
            id="category"
            value={newRecipe.category}
            onChange={handleCategoryChange}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>

      </DialogActions>
    </Dialog>
  )
}

export default RecipeFormDialog

// Title 
// mainImage 
// Time for preparation
// Cooking time
// Energy 
// Country
// Serves 
// Ingredients
// Steps
// Gallery
// Category