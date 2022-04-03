import React from 'react'
import { styled, ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import { themeOptions } from './themes/theme'

import TopBar from './components/TopBar'
import SideMenu from './components/SideMenu'
import RecipeDetails from './components/RecipeDetails'
import recipes from './recipes'

const AppContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 500px',
  gridTemplateRows: '100vh',
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
  // height: '100vh'
  // maxHeight: '100vh', // Change this later. May lead to unexpected effects
  // display: 'inline-flex',

}))

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <AppContainer className="App">
        <AppContent>
          <TopBar />
          <Routes>
            <Route 
              path="/:id"
              element={<RecipeDetails recipes={recipes} />}
            />
          </Routes>
        </AppContent>
        <Routes>
          <Route 
            path="/:id"
            element={<SideMenu recipes={recipes} />}
          />
        </Routes>
        {/* <SideMenu />  */}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
