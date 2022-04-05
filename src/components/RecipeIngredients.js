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
    ingredientName: {
      display: 'inline'
    },
    ingredientProp: {
      display: 'inline',
      color: theme => theme.palette.text.secondary
    },
    ingredientsContainer: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }
  }

  return (
    <Box
      sx={styles.ingredientsContainer}
    >
      <List>
        <ListItem>
            <AccessTimeIcon 
              sx={{
                mr: 2,
                color: theme => theme.palette.text.secondary
              }}
            />
          <ListItemText 
            primary={recipe.cookingTime} 
            sx={{
              color: theme => theme.palette.text.primary
            }}
          />
        </ListItem>
        <ListItem>
            <RestaurantMenuOutlinedIcon 
              sx={{
                mr: 2,
                color: theme => theme.palette.text.secondary
              }}
            />
          <ListItemText 
            primary={`${recipe.calories} kilocalories`} 
            sx={{
              color: theme => theme.palette.text.primary
            }}
          />
        </ListItem>
        <ListItem>
            <PublicIcon 
              sx={{
                mr: 2,
                color: theme => theme.palette.text.secondary
              }}
            />
          <ListItemText 
            primary={`${recipe.country}`} 
            sx={{
              color: theme => theme.palette.text.primary
            }}
          />
        </ListItem>
      </List>
      <Typography
        variant="h5"
        component="p"
        color="text.primary"
        sx={{
          px: 2
        }}
        // gutterBottom={true}
      >
        Ingredients
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          my: 3,
          px: 2
        }}
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
          sx={{
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
          }}
        >
          <RemoveIcon 
            sx={{
              fontSize: '0.9rem'
            }}
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
          sx={{
            backgroundColor: theme => theme.palette.secondary.main,
            color: 'white',
            width: '25px',
            height: '25px',
            "&:hover": {
              backgroundColor: theme => theme.palette.secondary.main
            }
          }}
          >
          <AddIcon 
            sx={{
              fontSize: '0.9rem'
            }}
          />
        </IconButton>
      </Box>
      <FormGroup
        sx={{
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          overflowY: 'auto'
        }}
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
                    sx={{
                      color: theme => theme.palette.secondary.main
                    }}
                  />
                }
              />
            }
            label={
              <>
                <Typography
                  sx={styles.ingredientName}
                >
                  {`${Math.round(i.quantity * (quantity / recipe.servings))} ${i.name} `}
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