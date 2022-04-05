import React, { useState } from 'react'
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Review from './Review'

const RecipeReviews = ({ recipe }) => {
  const [sort, setSort] = useState('most recent')

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  const styles = {
    container: {
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    reviewsContainer: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      gap: 4,
      mt: 4
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    sortSelect: {
      color: theme => theme.palette.text.secondary
    },
    dropDownIcon: {
      color: theme => theme.palette.secondary.main
    }
  }
  
  return (
    <Box
      sx={styles.container}
    >
      <Box
        sx={styles.titleContainer}
      >
        <Typography
          variant="h5"
          component="p"
          color="text.primary"
          // gutterBottom={true}
        >
          Reviews
        </Typography>
        <FormControl>
          <Select
            value={sort}
            onChange={handleSort}
            variant="standard"
            sx={styles.sortSelect}
            disableUnderline
            IconComponent={() => <KeyboardArrowDownIcon 
              sx={styles.dropDownIcon}
            />}
          >
            <MenuItem value="most recent">Most recent</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
            <MenuItem value="best review">Best review</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={styles.reviewsContainer}
      >
        {recipe.reviews.map(r =>
          <Review 
            key={r.id}
            review={r}
          />
        )}
      </Box>
    </Box>
  )
}

export default RecipeReviews