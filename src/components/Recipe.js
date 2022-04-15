import React from 'react'
import { Link } from 'react-router-dom'
import {
  ImageListItem,
  ImageListItemBar,
  Stack,
  Chip,
  Typography,
} from '@mui/material'
import { useTheme } from '@emotion/react'

const Recipe = ({ recipe }) => {
  const theme = useTheme()
  
  const styles = {
    container: {
      overflow: 'hidden',
      height: '300px',
      borderRadius: 4,
      backgroundColor: theme => theme.palette.secondary.main,
      [theme.breakpoints.up('lg')]: {
        "&:nth-of-type(6n+1), &:nth-of-type(6n+3)": {
          // flex: 1,
          // position: 'relative',
          width: '36%',
        },
        "&:nth-of-type(6n+2)": {
          // flex: 2,
          // position: 'relative',
          width: '15%',
        },
        "&:nth-of-type(6n+4), &:nth-of-type(6n+6)": {
          // flex: 2,
          // position: 'relative',
          width: '20%',
        },
        "&:nth-of-type(6n+5)": {
          // flex: 2,
          // position: 'relative',
          width: '45%',
        },
      },
      [theme.breakpoints.up('md')]: {
        "&:nth-of-type(4n+1), &:nth-of-type(4n+4)": {
          // flex: 1,
          // position: 'relative',
          width: '63%',
        },
        "&:nth-of-type(4n+2), &:nth-of-type(4n+3)": {
          // flex: 2,
          // position: 'relative',
          width: '30%',
        },
        "&:nth-last-of-type(1)": {
          width: '97%'
        }
      },
      [theme.breakpoints.up('xs')]: {
        width: '100%'
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