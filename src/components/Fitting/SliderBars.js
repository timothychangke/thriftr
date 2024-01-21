import classes from '../../styles/Model.module.css';
import SliderBar from './SliderBar';

function SliderBars({ onMeasurementChange }) {
    return (
        <>
            <SliderBar
                className={classes.slider_bar}
                sliderText="Pit to Pit Length(cm)"
                defaultValue={26}
                start={20}
                end={32}
                handleMeasurementChange={onMeasurementChange}
                changeType="ptp"
            />
            <SliderBar
                className={classes.slider_bar}
                sliderText="Torso Length(cm))"
                defaultValue={28}
                start={24}
                end={32}
                handleMeasurementChange={onMeasurementChange}
                changeType="torso"
            />
            <SliderBar
                className={classes.slider_bar}
                sliderText="Waist size(cm)"
                defaultValue={31}
                start={28}
                end={34}
                handleMeasurementChange={onMeasurementChange}
                changeType="waist"
            />
        </>
    );
}

export default SliderBars;
