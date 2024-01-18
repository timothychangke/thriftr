import React from 'react'
import classes from '../styles/CardButton.module.css'

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function CardButtons() {
  return (
    <div className={classes.buttons}>
      <IconButton className={classes.buttons_replay}>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.buttons_close}>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.buttons_star}>
        <StarIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.buttons_favorite}>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className={classes.buttons_lightning}>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default CardButtons
