import React from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import {
  Box,
} from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'
import { themeOptions } from './themes/theme'

import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage'
import SavedRecipes from './components/SavedRecipes'
import HomeSideMenu from './components/HomeSideMenu'
import RecipeSideMenu from './components/RecipeSideMenu'
import RecipeDetails from './components/RecipeDetails'
import Recipes from './components/Recipes'

import user from './user'
import recipes from './recipes'
import categories from './categories'

const AppContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  // justifyContent: 'start',
  // alignItems: 'start',
  // alignItems: 'stretch',
  // height: '100vh',
  // width: '100vw',
  // background: 'rgb(92,99,123)', // For IE compatibility
  // background: 'linear-gradient(135deg, rgba(92,99,123,1) 0%, rgba(23,29,47,1) 100%)',
}))

const AppContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  overflow: 'hidden',
  alignSelf: 'stretch',
}))

const App = () => {
  
  return (
    <ThemeProvider theme={themeOptions}>
      <AppContainer className="App">
        <SideBar />
        <AppContent>
          <TopBar />
          <Routes>
            <Route 
              path="/:id"
              element={<RecipeDetails recipes={recipes} />}
            />
            <Route 
              path="/"
              element={<HomePage recipes={recipes} categories={categories} />}
            />
            <Route
              path="/saved"
              element={<SavedRecipes recipes={recipes} user={user} />}
            />
          </Routes>
        </AppContent>
        <Routes>
          <Route 
            path="/:id"
            element={<RecipeSideMenu recipes={recipes} />}
          />
          <Route
            path="/"
            element={<HomeSideMenu />}
          />
          <Route
            path="/saved"
            element={<></>}
          />
        </Routes>
        {/* <SideMenu />  */}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
