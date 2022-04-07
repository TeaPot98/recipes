import React from 'react'
import {
  Radio,
  FormControlLabel,
  Typography,
} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

const CategoryButton = ({ value, label, checked }) => {
  const styles = {
    categoryButton: {
      color: theme => checked ? theme.palette.secondary.main : theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      mb: 1,
      transition: 'color 0.2s ease-in-out',
      "&:hover": {
        color: theme => checked ? theme.palette.secondary.main : theme.palette.text.paragraph
      }
    },
    categoryRadioStyle: {
      m: 0,
      p: 0,
    },
    radioLabel: {
      textTransform: 'uppercase',
    }
  }
  
  return (
    <FormControlLabel 
      key="all-categories-button"
      value={value}
      sx={styles.categoryButton}
      label={
        <Typography
          sx={styles.radioLabel}
        >
          {label}
        </Typography>
      }
      labelPlacement="top"
      control={<Radio 
        sx={styles.categoryRadioStyle} 
        icon={<CircleIcon 
          sx={{
            fontSize: 10,
            color: 'transparent'
          }}
        />}
        checkedIcon={<CircleIcon 
          sx={{
            fontSize: 10,
            color: theme => theme.palette.secondary.main
          }}
        />}
      />}
    />
  )
}

export default CategoryButton