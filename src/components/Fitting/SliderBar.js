import Slider from '@mui/material/Slider';
import classes from '../../styles/Model.module.css';

function SliderBar({
    sliderText,
    defaultValue,
    start,
    end,
    handleMeasurementChange,
    changeType
}) {
    function valuetext(value) {
        return `${value}cm`;
    }
    return (
        <>
            <p>{sliderText}</p>
            <Slider
                className={classes.slider_bar}
                aria-label={sliderText}
                defaultValue={defaultValue}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={start}
                max={end}
                onChange={(event, value) =>
                    handleMeasurementChange(value, changeType)
                }
            />
        </>
    );
}

export default SliderBar;
