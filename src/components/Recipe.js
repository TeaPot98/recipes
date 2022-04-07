import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Chip,
  Typography,
} from '@mui/material'

const Recipe = ({ recipe }) => {
  const styles = {
    container: {
      overflow: 'hidden',
      height: '300px',
      borderRadius: 4,
      backgroundColor: theme => theme.palette.secondary.main,
      "&:nth-of-type(6n+1), &:nth-of-type(6n+3)": {
        // flex: 1,
        // position: 'relative',
        width: '38%',
      },
      "&:nth-of-type(6n+2)": {
        // flex: 2,
        // position: 'relative',
        width: '18%',
      },
      "&:nth-of-type(6n+4), &:nth-of-type(6n+6)": {
        // flex: 2,
        // position: 'relative',
        width: '23%',
      },
      "&:nth-of-type(6n+5)": {
        // flex: 2,
        // position: 'relative',
        width: '48%',
      }
    },
    itemBar: {
      background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(23,29,47,0) 100%)',
      // height: '45%',
    },
    chip: {
      backgroundColor: theme => theme.palette.secondary.main,
      textTransform: 'uppercase',
      color: 'white',
      mb: 2,
      fontSize: '0.8rem',
    },
    chipArray: {
      overflow: 'hidden'
    }
  }
  
  return (
    <ImageListItem
      component={Link}
      to={`/${recipe.id}`}
      sx={styles.container}
    >
      <img
        src={recipe.mainImage}
        alt={recipe.mainImage}
        loading="lazy"
      />
      <ImageListItemBar
        sx={styles.itemBar}
        title={
          <Stack 
            direction="row" 
            spacing={1}
            sx={styles.chipArray}
          >
            {recipe.trend && 
            <Chip 
              key="74513807539" 
              label="Trend"
              color="error"
              size="small"
              sx={{
                ...styles.chip,
                backgroundColor: theme => theme.palette.error.main
              }}
              />}
            {recipe.category.map(c =>
              <Chip 
              key={c.id} 
              label={c.name} 
              size="small"
              sx={styles.chip}
              />
            )}
          </Stack>
        }
        subtitle={
          <Typography

          >
            {recipe.title}
          </Typography>
        }
      />
    </ImageListItem>
  )
}

export default Recipe