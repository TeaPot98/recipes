import React from 'react'
import { styled } from '@mui/material/styles'

import TopBar from './components/TopBar'
import SideMenu from './components/SideMenu'

const AppContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  // alignItems: 'stretch',
  height: '100vh', // Change this later. May lead to unexpected effects
  width: '100vw',
  // background: 'rgb(92,99,123)', // For IE compatibility
  // background: 'linear-gradient(135deg, rgba(92,99,123,1) 0%, rgba(23,29,47,1) 100%)',
}))

const AppContent = styled('div')(({ theme }) => ({
  flex: 1
}))

function App() {
  return (
    <>
      <AppContainer className="App">
        <AppContent>
          <TopBar />
        </AppContent>
        <SideMenu /> 
      </AppContainer>
    </>
  );
}

export default App;
