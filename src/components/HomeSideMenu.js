import React from 'react'

import { SideMenuContainer, SideMenuWrapper } from './SideMenu'

const HomeSideMenu = () => {
  const styles = {
    wrapper: {
      p: 1,
    }
  }
  
  return (
    <SideMenuWrapper sx={styles.wrapper} >
      <SideMenuContainer>

      </SideMenuContainer>
    </SideMenuWrapper>
  )
}

export default HomeSideMenu