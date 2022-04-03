import React from 'react'
import {
  Typography,
  Box,
  Rating,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';

const RecipeDetails = ({ recipes }) => {
  const recipeId = useParams().id
  const recipe = recipes.find(r => r.id === recipeId)
  // console.log(recipe)

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      p: 6,
      flex: 1,
      // height: '100%',
      overflow: 'hidden'
    },
    title: {
      color: 'white'
    },
    ratingContainer: {
      my: 5,
      display: 'flex',
      gap: 1.5
    },
    ratingText: {
      color: theme => theme.palette.text.secondary
    },
    ratingEmpty: {
      mx: 0.5,
      color: theme => theme.palette.text.secondary
    },
    ratingFilled: {
      mx: 0.5,
      color: theme => theme.palette.secondary.main
    },
    method: {
      color: 'white'
    },
    steps: {
      overflowY: 'auto',
      // height: '300px'
    },
    stepContainer: {
      display: 'flex',
      color: theme => theme.palette.text.paragraph, 
      gap: 2,
      mb: 4
    },
    stepNumber: {
      textTransform: 'uppercase',
      writingMode: 'vertical-lr',
      transform: 'rotate(180deg)',
      direction: 'rtl',
      color: theme => theme.palette.secondary.main,
      fontSize: '0.8rem',
      letterSpacing: '3px'
      // textOrientation: 'sideways'
    }
  }
  
  return (
    <Box
      sx={styles.container}
    >
      <Typography
        sx={{
          textTransform: 'uppercase',
          color: theme => theme.palette.secondary.main
        }}
      >
        Main Course
      </Typography>
      <Typography
        component="h1"
        variant="h3"
        sx={styles.title}
      >
        {recipe.title}
      </Typography>
      <Box
        sx={styles.ratingContainer}
      >
        <Rating 
          name="read-only-rating" 
          defaultValue={recipe.rating} 
          precision={0.1}
          icon={
            <StarIcon 
              fontSize="small"
              sx={styles.ratingFilled}
            />
          }
          emptyIcon={
            <StarIcon 
              fontSize="small"
              sx={styles.ratingEmpty}
            />
          }
          readOnly 
        />
        <Typography
          sx={styles.ratingText}
        >
          {`${recipe.rating} out of 5`}
        </Typography>
      </Box>
      <Typography
        component="h3"
        variant="h5"
        sx={styles.method}
      >
        Method
      </Typography>
      <Box
        sx={styles.steps}
      >
        {recipe.steps.map((s, i) => 
          <Box
            key={i}
            sx={styles.stepContainer}
          >
            <Typography
              sx={styles.stepNumber}
            >
              Step {i + 1}
            </Typography>
            <Typography
              // paragraph
            >
              {s}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default RecipeDetails