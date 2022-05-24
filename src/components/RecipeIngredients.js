import React from 'react'
import { 
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PublicIcon from '@mui/icons-material/Public'

const RecipeIngredients = ({ recipe, quantity, subtractServing, addServing }) => {

  const styles = {
    title: {
      px: 2,
      fontFamily: 'Blacker',
    },
    infoIcon: {
      mr: 2,
      color: theme => theme.palette.text.secondary
    },
    infoText: {
      color: theme => theme.palette.text.primary
    },
    ingredientName: {
      display: 'inline'
    },
    ingredientProp: {
      display: 'inline',
      color: theme => theme.palette.text.secondary
    },
    servesContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      my: 3,
      px: 2
    },
    servesButton: {
      backgroundColor: theme => theme.palette.secondary.main,
      color: 'white',
      width: '25px',
      height: '25px',
      "&:hover": {
        backgroundColor: theme => theme.palette.secondary.main
      },
      "&:disabled": {
        backgroundColor: theme => theme.palette.secondary.disabled,
        color: 'white'
      }
    },
    servesIcon: {
      fontSize: '0.9rem'
    },
    ingredientsContainer: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    },
    ingredientsList: {
      px: 2,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '0.4em',
        backgroundColor: theme => theme.palette.secondary.menu,
        borderRadius: 5,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme => theme.palette.text.secondary,
        borderRadius: 5
        // outline: '1px solid slategrey'
      }
    },
    radioIcon: {
      color: theme => theme.palette.secondary.main,
      
    }
  }

  return (
    <Box
      sx={styles.ingredientsContainer}
    >
      <List>
        <ListItem>
            <AccessTimeIcon 
              sx={styles.infoIcon}
            />
          <ListItemText 
            primary={`${recipe.cookingTime} minutes`} 
            sx={styles.infoText}
          />
        </ListItem>
        <ListItem>
            <RestaurantMenuOutlinedIcon 
              sx={styles.infoIcon}
            />
          <ListItemText 
            primary={`${recipe.calories} kilocalories`} 
            sx={styles.infoText}
          />
        </ListItem>
        <ListItem>
            <PublicIcon 
              sx={styles.infoIcon}
            />
          <ListItemText 
            primary={`${recipe.country}`} 
            sx={styles.infoText}
          />
        </ListItem>
      </List>
      <Typography
        variant="h5"
        component="p"
        color="text.primary"
        sx={styles.title}
        // gutterBottom={true}
      >
        Ingredients
      </Typography>
      <Box
        sx={styles.servesContainer}
      >
        <Typography
          variant="subtitle2"
          component="p"
          color="text.secondary"
        >
          Serves
        </Typography>
        <IconButton
          size="small"
          disabled={quantity === recipe.servings}
          onClick={subtractServing}
          sx={styles.servesButton}
        >
          <RemoveIcon 
            sx={styles.servesIcon}
          />
        </IconButton>
        <Typography
          component="p"
          color="text.primary"
        >
          {quantity}
        </Typography>
        <IconButton
          size="small"
          onClick={addServing}
          sx={styles.servesButton}
          >
          <AddIcon 
            sx={styles.servesIcon}
          />
        </IconButton>
      </Box>
      <FormGroup
        sx={styles.ingredientsList}
      >
        {recipe.ingredients.map((i, index) => 
          <FormControlLabel
            key={index} 
            control={
              <Checkbox
                disableRipple={true}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={
                  <CheckCircleIcon 
                    sx={styles.radioIcon}
                  />
                }
              />
            }
            label={
              <>
                <Typography
                  sx={styles.ingredientName}
                >
                  {`${(i.quantity * (quantity / recipe.servings)).toFixed(2)} ${i.measureUnit} ${i.name} `}
                </Typography>
                <Typography
                  sx={styles.ingredientProp}
                >
                  {i.property}
                </Typography>
              </>
            }
          />
        )}
      </FormGroup>
    </Box>
  )
}

export default RecipeIngredients