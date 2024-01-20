import shirt from '../img/brown_shirt.png';
import classes from '../styles/Model.module.css'

function Shirt() {
    return (
        <div className={classes.shirt}>
            <img src={shirt} alt="clothe item" />
        </div>
    );
}

export default Shirt;
