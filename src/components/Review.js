import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Typography,
  Rating,
  IconButton,
  Button,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import ForwardIcon from '@mui/icons-material/Forward';

const Review = ({ review }) => {
  const [reviewRating, setReviewRating] = useState(review.reviewRating)
  // console.log(review)

  const voteUp = () => {
    setReviewRating(reviewRating => reviewRating + 1)
  }

  const voteDown = () => {
    setReviewRating(reviewRating => reviewRating - 1)
  }

  const styles = {
    reviewHeader: {
      display: 'flex',
      gap: 2,
      mb: 2
    },
    reviewButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    },
    name: {
      color: theme => theme.palette.text.primary,
    },
    comment: {
      color: theme => theme.palette.text.primary
    },
    ratingEmpty: {
      mr: 1,
      color: theme => theme.palette.text.secondary,
    },
    ratingFilled: {
      mr: 1,
      color: theme => theme.palette.secondary.main,
    },
    voteUpButton: {
      color: theme => theme.palette.text.secondary,
      width: '25px',
      height: '25px',
      transform: 'rotate(-90deg)'
    },
    voteDownButton: {
      color: theme => theme.palette.text.secondary,
      width: '25px',
      height: '25px',
      transform: 'rotate(90deg)'
    },
    replyButton: {
      textTransform: 'none',
      color: theme => theme.palette.text.secondary
    },
  }
  
  return (
    <Box>
      <Box
        sx={styles.reviewHeader}
      >
        <Avatar alt="John Doe" src="" />
        <Box
          sx={styles.reviewAuthorRating}
        >
          <Typography
            sx={styles.name}
          >
            {review.name}
          </Typography>
          <Rating 
            name="read-only-rating" 
            defaultValue={review.rating} 
            precision={0.1}
            icon={
              <StarIcon 
                fontSize="small"
                sx={styles.ratingFilled}
              />
            }
            emptyIcon={
              <StarIcon 
                fontSize="small"
                sx={styles.ratingEmpty}
              />
            }
            readOnly 
          />
        </Box>
      </Box>
      <Typography
        sx={styles.comment}
      >
        {review.comment}
      </Typography>
      <Box
        sx={styles.reviewButtons}
      >
        <IconButton
          size="medium"
          onClick={voteUp}
          sx={styles.voteUpButton}
        >
          <ForwardIcon fontSize="small" />
        </IconButton>
        <Typography
          component="p"
          color="text.primary"
        >
          {reviewRating}
        </Typography>
        <IconButton
          size="small"
          onClick={voteDown}
          sx={styles.voteDownButton}
          >
          <ForwardIcon fontSize="small" />
        </IconButton>
        <Button sx={styles.replyButton}>Reply</Button>
      </Box>
    </Box>
  )
}

export default Review