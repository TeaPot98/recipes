import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { 
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import MuiBottomNavigation from '@mui/material/BottomNavigation'
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import PublicIcon from '@mui/icons-material/Public'

import RecipeIngredients from './RecipeIngredients'
import RecipeReviews from './RecipeReviews'

const SideMenuWrapper = styled('div')(({ theme }) => ({
  // width: '500px',
  p: 1,
  m: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}))

const SideMenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  // minWidth: '300px',
  height: '100%',
  borderRadius: 55,
  overflow: 'hidden',
}))

const BottomNavigationAction = styled(MuiBottomNavigationAction)(({ theme }) => ({
  color: theme.palette.text.primary,
  paddingTop: '10px',
  minWidth: '50px',
  maxWidth: '80px',
  height: '50px',
  borderRadius: theme.spacing(1.5),
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    // margin: 'auto',
    paddingTop: '10px',
    backgroundColor: 'white',
  }
}))

const BottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.menu,
  borderRadius: 100,
  margin: theme.spacing(1),
  minHeight: '100px',
  padding: theme.spacing(0, 8, 0, 8),
  gap: theme.spacing(2),
  alignItems: 'center',
}))

const SideMenu = ({ recipes }) => {
  const [bottomMenuValue, setBottomMenuValue] = useState(0)

  const recipeId = useParams().id
  const recipe = recipes.find(r => r.id === recipeId) 
  
  const [quantity, setQuantity] = useState(recipe.servings)
  
  const addServing = () => {
    setQuantity(quantity => quantity + 1)
  }

  const subtractServing = () => {
    setQuantity(quantity => quantity - 1)
  }

  const sideMenuContent = () => {
    switch (bottomMenuValue) {
      case 0:
        return <RecipeIngredients 
          recipe={recipe}
          quantity={quantity}
          addServing={addServing}
          subtractServing={subtractServing}
        />
      case 1:
        return <RecipeReviews recipe={recipe} />
      default:
        return null
    }
  }
  
  return (
    <SideMenuWrapper
      sx={{
        p: 1
      }}
    >
      <SideMenuContainer
        sx={{
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            p: 6,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {sideMenuContent()}
        </Box>
        <Box 
          sx={{
            flex: 1,
            overflow: 'hidden'
          }}
        />
        <BottomNavigation
          value={bottomMenuValue}
          onChange={(event, newValue) => {
            if(newValue !== 3 && newValue !== 4) {
              setBottomMenuValue(newValue) 
            }
          }}
        >
          <BottomNavigationAction disableRipple icon={<ShoppingCartOutlinedIcon />} />
          <BottomNavigationAction disableRipple icon={<CommentOutlinedIcon />} />
          <BottomNavigationAction disableRipple icon={<InsertPhotoOutlinedIcon />} />
          <BottomNavigationAction disableRipple icon={<BookmarkBorderOutlinedIcon />} />
          <BottomNavigationAction disableRipple icon={<ShareOutlinedIcon />} />
        </BottomNavigation>
      </SideMenuContainer>
    </SideMenuWrapper>
  )
}

export default SideMenu