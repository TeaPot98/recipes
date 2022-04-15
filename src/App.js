import React, { useState } from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import {
  Container,
} from '@mui/material'
import {  
  Route, 
  Routes,
} from 'react-router-dom'

import { themeOptions } from './themes/theme'

import TopBar from './components/TopBar'
import HomePage from './components/HomePage'
import HomeSideMenu from './components/HomeSideMenu'
import RecipeSideMenu from './components/RecipeSideMenu'
import RecipeDetails from './components/RecipeDetails'

import recipes from './recipes'
import categories from './categories'

const AppContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    height: 'auto',
    alignItems: 'stretch',
  }
  // [theme.breakpoints.]
}))

const AppContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  // overflow: 'auto',
  alignSelf: 'stretch',
  // overflowY: 'hidden',
}))

const App = () => {
  const [searchString, setSearchString] = useState('')
  let recipesToShow = recipes

  const handleSearch = (event) => {
    setSearchString(event.target.value)
  }

  if (searchString !== '') {
    recipesToShow = recipes.filter(r => r.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()))
  }
  
  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="xl">
        <AppContainer className="App">
          <AppContent>
            <TopBar handleSearch={handleSearch} />
              <Routes>
                <Route 
                  path="/:id"
                  element={<RecipeDetails recipes={recipes} />}
                />
                <Route 
                  path="/"
                  element={<HomePage recipesToShow={recipesToShow} recipes={recipes} categories={categories} />}
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
              element={<></>}
            />
          </Routes>
          {/* <SideMenu />  */}
        </AppContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
