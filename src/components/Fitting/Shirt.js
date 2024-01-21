import classes from '../../styles/Model.module.css';

function Shirt({ shirtNum }) {
    const classes_id = `classes.shirt${shirtNum}`;
    console.log(classes.shirt);
    return (
        <div
            className={
                shirtNum === 1
                    ? classes.shirt1
                    : shirtNum === 2
                      ? classes.shirt2
                      : shirtNum === 3
                        ? classes.shirt3
                        : shirtNum === 4
                          ? classes.shirt4
                          : null
            }
        >
            <img
                src={require(`../../img/Shirts/shirt${shirtNum}.png`)}
                alt="clothe item"
            />
        </div>
    );
}

export default Shirt;
