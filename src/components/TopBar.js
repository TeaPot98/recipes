import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // mx: theme.spacing(10),
  // flex: 1,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 3),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
}))

const TopBar = ({ handleSearch }) => {
  const theme = useTheme()
  
  const styles = {
    toolbar: {
      justifyContent: 'space-between',
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
        flexDirection: 'column'
      },
    },
    title: { 
      // flexGrow: 1, 
      textDecoration: 'none',
      color: 'white',
      fontFamily: 'Blacker',
      [theme.breakpoints.down('lg')]: {
        fontSize: '2rem',
        alignSelf: 'start'
      },
      // display: { xs: 'none', sm: 'block' } 
    },
    searchContainer: {
      flex: 1,
      px: theme => theme.spacing(4),
      [theme.breakpoints.down('lg')]: {
        px: 0,
        alignSelf: 'stretch'
      },
    },
    addButton: {
      // color: theme => theme.palette.text.secondary,
      color: theme => theme.palette.secondary.main,

      textTransform: 'none',
      fontSize: '1rem',
      display: 'flex',
      gap: 1
    },
    addButtonIcon: {
      color: theme => theme.palette.secondary.main
    }
  }
  
  return (
    <Box>
      <CustomAppBar position="static" elevation={0}>
        <Toolbar
          sx={styles.toolbar}
        >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={styles.title}
          >
            Recipes.
          </Typography>
          <Box
            direction="row"
            alignItems="center"
            sx={styles.searchContainer}
          >
            <Search>
              {/* <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper> */}
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
              />
            </Search>
          </Box>
        </Toolbar>
      </CustomAppBar>
    </Box>
  )
}

export default TopBar