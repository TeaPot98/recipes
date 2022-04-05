import React from 'react'
import {
  ImageList,
  ImageListItem,
  Typography,
  Box,
  Button,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const RecipeGallery = ({ recipe }) => {
  const styles = {
    container: {
      px: 2,
      pt: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    uploadButton: {
      color: theme => theme.palette.text.secondary,
      textTransform: 'none',
      fontSize: '1rem',
      display: 'flex',
      gap: 1
    },
    uploadButtonIcon: {
      color: theme => theme.palette.secondary.main,

    },
    photo: {
      aspectRatio: '1 / 1',
      width: '100%',
      borderRadius: 15
    }
  }
  
  return (
    <Box
      sx={styles.container}
    >
      <Box
        sx={styles.titleContainer}
      >
        <Typography
            variant="h5"
            component="p"
            color="text.primary"
            // gutterBottom={true}
          >
            Photos
          </Typography>
          <Button
            sx={styles.uploadButton}
            
          >
            Upload
            <AddIcon 
              sx={styles.uploadButtonIcon}
              fontSize="small"
            />
          </Button>
      </Box>
      <ImageList
        sx={styles.galleryContainer}
        cols={2}
        gap={10}
      >
        {recipe.gallery.map((photo, i) => 
          <ImageListItem key={i} >
            <img 
              style={styles.photo}
              src={photo}
              alt={photo}
              loading="lazy"
            />
          </ImageListItem>
        )}
      </ImageList>
    </Box>
  )
}

 export default RecipeGallery