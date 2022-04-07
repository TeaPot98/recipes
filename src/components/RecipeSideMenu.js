import { useParams } from 'react-router-dom'
import React, { useState } from 'react'

import { 
  Box,
} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import RecipeIngredients from './RecipeIngredients'
import RecipeReviews from './RecipeReviews'
import RecipeGallery from './RecipeGallery'
import { 
  SideMenuContainer, 
  SideMenuWrapper, 
  BottomNavigation, 
  BottomNavigationAction 
} from './SideMenu'

const RecipeSideMenu = ({ recipes }) => {
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
      case 2:
        return <RecipeGallery recipe={recipe} />
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
            px: 6,
            pt: 6,
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

export default RecipeSideMenu