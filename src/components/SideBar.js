import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Box,
  IconButton,
} from '@mui/material'
import BookIcon from '@mui/icons-material/Book'
import BookmarkIcon from '@mui/icons-material/Bookmark';

const SideBar = () => {
  const location = useLocation()
  // console.log(location)

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
      gap: 3
    },
    button: {
      // fontSize: 
    }
  }
  
  return (
    <Box
      sx={styles.container}
    >
      <IconButton
        component={Link}
        to="/"
        sx={styles.button}
        color={location.pathname === "/" ? "secondary" : undefined}
        >
        <BookIcon 
          fontSize="large"
          sx={styles.buttonIcon}
        />
      </IconButton>
      <IconButton
        component={Link}
        to="/saved"
        sx={styles.button}
        color={location.pathname === "/saved" ? "secondary" : undefined}
      >
        <BookmarkIcon 
        fontSize="large"
          sx={styles.buttonIcon}
        />
      </IconButton>
      <Box sx={{ height: '60%'}}></Box>
    </Box>
  )
}

export default SideBar