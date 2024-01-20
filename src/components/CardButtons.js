import React, { useState } from "react";
import classes from '../styles/CardButton.module.css';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
// import Heart from "react-animated-heart";


function CardButtons() {
  // const [isClick, setClick] = useState(false);
    return (
        <div className={classes.buttons}>
            <IconButton className={classes.button} style={{ color: '#f5b748' }}>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} style={{ color: '#ec5e6f' }}>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} style={{ color: '#62b4f9' }} onClick={() => }>
                <ShoppingCartIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} style={{ color: '#76e2b3' }}>
                <FavoriteIcon fontSize="large" />
                {/* <Heart className={classes.heartIcon} isClick={isClick} onClick={() => setClick(!isClick)} /> */}
            </IconButton>
        </div>
    );
}

export default CardButtons;