import React from 'react'
import { styled } from '@mui/material/styles'
import { 
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
const SideMenuWrapper = styled('div')(({ theme }) => ({
  // width: '500px',
  p: 1,
  m: 1
}))

const SideMenuContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  // minWidth: '300px',
  height: '100%',
  borderRadius: 40
}))

const SideMenu = () => {
  return (
    <SideMenuWrapper
      sx={{
        p: 1
      }}
    >
      <SideMenuContainer>
        <List>
          <ListItem
            innerDivStyle={{
              paddingLeft: 0
            }}
          >
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText 
              primary="30 minutes" 
              sx={{
                flex: 1
              }}
            />
          </ListItem>
        </List>
      </SideMenuContainer>
    </SideMenuWrapper>
  )
}

export default SideMenu