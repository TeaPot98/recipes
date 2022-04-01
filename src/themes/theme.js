import { createTheme } from '@mui/material/styles'

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5c637b',
      transparent: '#3a4152'
    },
    secondary: {
      main: '#fcbe84',
      menu: '#e4e5eb'
    },
    text: {
      primary: '#171d2f',
      secondary: '#a2a8ba'
    }
  }
})