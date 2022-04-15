import React, { useState } from 'react'
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Recipes from './Recipes'
import CategoryButton from './CategoryButton'

const HomePage = ({ recipes, categories }) => {
  const theme = useTheme()
  const trendRecipes = recipes.filter(r => r.trend)
  const [categoryFilter, setCategoryFilter] = useState("0")
  let recipesToShow = []
  
    const styles = {
      container: {
        overflow: 'auto',
        py: 6,
        pl: 6,
        pr: 3,
        mr: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        [theme.breakpoints.down('lg')]: {
          p: 1,
          m: 1,
        },
        '&::-webkit-scrollbar': {
          width: '0.4em',
          backgroundColor: theme => theme.palette.primary.main,
          borderRadius: 5,
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme => theme.palette.secondary.main,
          borderRadius: 5
          // outline: '1px solid slategrey'
        }
      },
      title: {
        color: 'white'
      },
      categoryButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
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