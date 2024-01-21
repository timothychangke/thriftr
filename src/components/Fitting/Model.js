import head from '../../img/ModalParts/head.png';
import right_hand from '../../img/ModalParts/right_hand.png';
import left_leg from '../../img/ModalParts/left_leg.png';
import right_leg from '../../img/ModalParts/right_leg.png';

import classes from '../../styles/Model.module.css';
import Box from '@mui/material/Box';
import SliderBars from './SliderBars';

import ChooseClothes from './ChooseClothes.js';
import Alert from '@mui/material/Alert';

import {
    ptpToShoulderLength,
    torsoToHeight,
    waistToWaistLength
} from '../../util/scaling';

import Shirt from './Shirt';

import { useState } from 'react';

function Model() {
    const [userMeasurements, setUserMeasurements] = useState({
        ptp: 26,
        torso: 28,
        waist: 31
    });
    const [shirtPage, setShirtPage] = useState(1);

    function shirtPageChangeHandler(event, pageNumber) {
        setShirtPage(pageNumber);
    }
    function handleMeasurementChange(value, type) {
        let prevState = userMeasurements;
        if (type === 'ptp') {
            setUserMeasurements({ ...prevState, ptp: value });
        } else if (type === 'torso') {
            setUserMeasurements({ ...prevState, torso: value });
        } else if (type === 'waist') {
            setUserMeasurements({ ...prevState, waist: value });
        } else {
            return;
        }
    }
    const torsoStyling = {
        'grid-template-rows': `160px 40px ${torsoToHeight(userMeasurements['torso'])}px`
    };
    const ptpStyling = {
        right: { left: `${ptpToShoulderLength(userMeasurements['ptp'])}vw` },
        left: { right: `${ptpToShoulderLength(userMeasurements['ptp'])}vw` }
    };
    const waistStyling = {
        right: { right: `${waistToWaistLength(userMeasurements['waist'])}vw` },
        left: { left: `${waistToWaistLength(userMeasurements['waist'])}vw` }
    };
    return (
        <>
            <Alert
                severity="warning"
                style={{
                    width: '318px',
                    'margin-left': '80px',
                    'margin-bottom': '20px'
                }}
            >
                Page is still under construction.
            </Alert>
            <div className={classes.mega_container}>
                <div className={classes.slider}>
                    <h3>Enter your measurements: </h3>
                    <br />
                    <Box sx={{ width: 282 }}>
                        <SliderBars
                            onMeasurementChange={handleMeasurementChange}
                        />
                    </Box>
                    <br></br>
                    <p>Choose your clothes</p>
                    <ChooseClothes
                        onShirtPageChangeHandler={shirtPageChangeHandler}
                    />
                </div>
                <div className={classes.big_container}>
                    <div
                        className={classes.model_container}
                        style={torsoStyling}
                    >
                        <div className={classes.head}>
                            <img
                                src={head}
                                alt="head"
                                className={classes.head_img}
                            />
                        </div>
                        <Shirt shirtNum={shirtPage} />
                        <div
                            className={classes.left_arm}
                            style={ptpStyling['left']}
                        >
                            <img
                                src={right_hand}
                                alt="left_hand"
                                className={classes.left_arm_img}
                            />
                        </div>
                        <div
                            className={classes.right_arm}
                            style={ptpStyling['right']}
                        >
                            <img
                                src={right_hand}
                                alt="right_hand"
                                className={classes.right_arm_img}
                            />
                        </div>
                        <div
                            className={classes.left_leg}
                            style={waistStyling['left']}
                        >
                            <img
                                src={left_leg}
                                alt="left_leg"
                                className={classes.left_leg_img}
                            />
                        </div>
                        <div
                            className={classes.right_leg}
                            style={waistStyling['right']}
                        >
                            <img
                                src={right_leg}
                                alt="right_leg"
                                className={classes.right_leg_img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Model;
