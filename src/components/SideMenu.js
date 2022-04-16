import { styled } from '@mui/material/styles'
import MuiBottomNavigation from '@mui/material/BottomNavigation'
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction'


export const SideMenuWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '500px',
    minWidth: '500px',
  },
  // p: 1,
  // m: 1,
  [theme.breakpoints.down('lg')]: {
    // width: 'auto'
    // minWidth: 'none',
    // width: '100vw',
    maxWidth: '1000px',
    maxHeight: '100vh',
  },
  // zIndex: -1000,
  display: 'flex',
  flexDirection: 'column',
  // overflow: 'hidden'
}))

export const SideMenuContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '500px',
  },
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  // zIndex: -1000,
  // minWidth: '300px',
  height: '100%',
  borderRadius: 55,
  // overflow: 'hidden',
}))

export const BottomNavigationAction = styled(MuiBottomNavigationAction)(({ theme }) => ({
  color: theme.palette.text.primary,
  paddingTop: '10px',
  minWidth: '20px',
  maxWidth: '80px',
  height: '50px',
  borderRadius: theme.spacing(1.5),
  transition: 'background-color 0.2s ease-in-out',
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    // margin: 'auto',
    paddingTop: '10px',
    backgroundColor: 'white',
  },
  '&.Mui-selected:hover': {
    color: theme.palette.text.primary,
    // margin: 'auto',
    paddingTop: '10px',
    backgroundColor: 'white',
  },
  '&:hover': {
    backgroundColor: theme.palette.text.paragraph
  }
}))

export const BottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.menu,
  borderRadius: 100,
  margin: theme.spacing(1),
  minHeight: '100px',
  padding: theme.spacing(0, 1, 0, 1),
  gap: theme.spacing(0),
  alignItems: 'center',
}))