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
      justifyContent: 'center',
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
      color: 'white',
      mb: 3,
    },
    steps: {
      overflowY: 'auto',
      // height: '300px'
      maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
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
    },
    backgroundImage: {
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -110,
      // display: 'absolute',
      height: '100vh',
      width: '100vw',
      maskImage: 'linear-gradient(to bottom, black 5%, transparent 50%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 5%, transparent 50%)',
    }
  }
  
  return (
    <Box
      sx={styles.container}
    >
      <Box 
        component="img" 
        style={styles.backgroundImage}
        src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
      />
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