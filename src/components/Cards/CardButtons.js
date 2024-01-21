import React, { useState, useMemo, createRef } from "react";
import classes from '../../styles/CardButton.module.css';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
function CardButtons({clothes, onSwipeWithButton, onGoBackWithButton}) {
    
    return (
        <div className={classes.buttons}>
            <IconButton className={classes.button} style={{ color: '#f5b748' }} onClick={() => onGoBackWithButton()}>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} style={{ color: '#ec5e6f' }} onClick={() => onSwipeWithButton("left")}>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} style={{ color: '#62b4f9' }} onClick={() => onSwipeWithButton("right")}>
                <ShoppingCartIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} style={{ color: '#76e2b3' }}>
                <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default CardButtons;