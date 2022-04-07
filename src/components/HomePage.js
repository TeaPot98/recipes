import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';

import Recipes from './Recipes'
import CategoryButton from './CategoryButton'

const HomePage = ({ recipes, categories }) => {
  const trendRecipes = recipes.filter(r => r.trend)
  const [categoryFilter, setCategoryFilter] = useState("0")
  let recipesToShow = []
  
    const styles = {
      container: {
        overflow: 'auto',
        p: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      },
      title: {
        color: 'white'
      },
      categoryButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start'
      },
    }

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value)
  }

  if (categoryFilter !== "0") {
    recipesToShow = recipes.filter(r => {
      const found = r.category.find(c => c.id === categoryFilter)
      return !!found
    })
  } else {
    recipesToShow = recipes
  }
  
  return (
    <Box
      sx={styles.container}
    >
      <Recipes recipes={trendRecipes.slice(0, 3)} />
      <Typography
        component="h1"
        variant="h4"
        sx={styles.title}
      >
        Explore recipes
      </Typography>
      <FormControl
        sx={styles.categoryButtons}
      >
        <RadioGroup
          row
          name="category"
          defaultValue="0"
          onChange={handleCategoryChange}
        >
          <CategoryButton 
            value="0"
            label="All"
            checked={categoryFilter === "0"}
          />
        {categories.map(c =>
          <CategoryButton 
            value={c.id}
            label={c.name}
            checked={categoryFilter === c.id}
            key={c.id}
          />
        )}
        </RadioGroup>
      </FormControl>
      <Recipes recipes={recipesToShow} />
    </Box>
  )
}

export default HomePage