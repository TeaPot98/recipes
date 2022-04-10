import React, {useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Stack,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add'

import { addNewRecipe } from '../services/firebase'
import RecipeFormDialog from './RecipeFormDialog'

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
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 3),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
}))

const TopBar = () => {
  const [openRecipeForm, setOpenRecipeForm] = useState(false)

  const openRecipeFormDialog = () => {
    setOpenRecipeForm(true)
  }

  const handleRecipeFormClose = () => {
    setOpenRecipeForm(false)
    console.log('The recipe form dialog is closed!')
  }
  
  const styles = {
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
          sx={{
            justifyContent: 'space-between',

          }}
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
            component="div"
            sx={{ 
              // flexGrow: 1, 
              display: { xs: 'none', sm: 'block' } 
            }}
          >
            Recipes.
          </Typography>
          <Box
            direction="row"
            alignItems="center"
            sx={{
              flex: 1,
              px: theme => theme.spacing(4)
            }}
          >
            <Search>
              {/* <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper> */}
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Button
            sx={styles.addButton}
            onClick={openRecipeFormDialog}
          >
            <AddIcon 
              sx={styles.addButtonIcon}
              fontSize="small"
            />
            Add New Recipe
          </Button>
          <RecipeFormDialog open={openRecipeForm} onClose={handleRecipeFormClose} />
        </Toolbar>
      </CustomAppBar>
    </Box>
  )
}

export default TopBar