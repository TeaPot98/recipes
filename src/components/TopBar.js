import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Stack,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',

          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </CustomAppBar>
    </Box>
  )
}

export default TopBar