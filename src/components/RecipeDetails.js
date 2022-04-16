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
      height: '100%',
      p: {xs: 2, lg: 6},
      flex: 1,
      overflowY: 'hidden',
      // [theme.breakpoints.down('lg')]: {
      //   p: 2
      // }
    },
    mainCategory: {
      textTransform: 'uppercase',
      color: theme => theme.palette.secondary.main,
      fontFamily: 'Campton',
    },
    recipeHeading: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    largeTopImage: {
      zIndex: 5000,
      position: 'absolute',
      height: '250px',
      top: 10,
      right: -50,
    },
    largeTopImageContainer: {
      zIndex: 5000,
      position: 'relative',
      display: { xs: 'none', lg: 'block' }
    },
    smallTopImage: {
      display: 'block',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    smallTopImageContainer: {
      display: {xs: 'block', lg: 'none'},
    },
    title: {
      color: 'white',
      fontFamily: 'Blacker',
    },
    ratingContainer: {
      my: {xs: 2, lg: 5},
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
      pr: 2,
      // height: '100%',
      // maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
      // WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
      '&::-webkit-scrollbar': {
        width: '0.4em',
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: 5,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme => theme.palette.secondary.main,
        borderRadius: 5
      }
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
      // maskImage: 'linear-gradient(to bottom, black 5%, transparent 50%)',
      // WebkitMaskImage: 'linear-gradient(to bottom, black 5%, transparent 50%)',
    }
  }
  
  return (
    <>
      <Box
        sx={styles.largeTopImageContainer}
      >
        <img 
          src={recipe.circleImage}
          alt="Recipe"
          style={styles.largeTopImage}
        />
      </Box>
      <Box
        sx={styles.container}
      >
        <Box sx={styles.smallTopImageContainer}>
          <img 
            src={recipe.circleImage}
            alt="Recipe"
            style={styles.smallTopImage}
          />
        </Box>
        <Box
          sx={styles.recipeHeading}
        >
          <Box>
            <Typography
              sx={styles.mainCategory}
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
          </Box>
          <Box sx={{ 
            width: '300px',
            display: { lg: 'block', md: 'none', sm: 'none', xs: 'none'}
          }} />
          {/* <Box
            sx={styles.largeTopImageContainer}
          >
            <img 
              src="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527963643z8uvx.png"
              alt="Recipe"
              style={styles.largeTopImage}
            />
          </Box> */}
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
    </>
  )
}

export default RecipeDetails