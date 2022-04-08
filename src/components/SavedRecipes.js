import React from 'react'
import {
  Box,
} from '@mui/material'

import Recipes from './Recipes'

const SavedRecipes = ({ recipes, user }) => {

  const styles = {
    container: {
      p: 6
    }
  }

  const recipesToShow = recipes.filter(r => user.saved.includes(r.id))
  
  return (
    <Box
      sx={styles.container}
    >
      <Recipes recipes={recipesToShow} overflow="auto" />
    </Box>
  )
}

export default SavedRecipes