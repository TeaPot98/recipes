import React from 'react'
import {
  Box,
} from '@mui/material'

import Recipe from './Recipe'

const Recipes = ({ recipes, overflow }) => {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 4,
      // overflowY: 'auto',
      flex: 1,
      overflow: {overflow}
      // m: 6,
      // height: '100%',
    }
  }
  
  return (
    <Box
      sx={styles.container}
    >
      {recipes.map(r =>
        <Recipe 
          key={r.id}
          recipe={r}
        />  
      )}
    </Box>
  )
}

export default Recipes