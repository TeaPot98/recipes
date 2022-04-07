import { styled } from '@mui/material/styles'
import MuiBottomNavigation from '@mui/material/BottomNavigation'
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction'


export const SideMenuWrapper = styled('div')(({ theme }) => ({
  minWidth: '500px',
  width: '500px',
  p: 1,
  m: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}))

export const SideMenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  // minWidth: '300px',
  height: '100%',
  borderRadius: 55,
  overflow: 'hidden',
}))

export const BottomNavigationAction = styled(MuiBottomNavigationAction)(({ theme }) => ({
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

export const BottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.menu,
  borderRadius: 100,
  margin: theme.spacing(1),
  minHeight: '100px',
  padding: theme.spacing(0, 8, 0, 8),
  gap: theme.spacing(2),
  alignItems: 'center',
}))