import {NavLink} from 'react-router-dom'
import classes from '../styles/MainNavigation.module.css'

function MainNavigation() {
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={classes.listItem}>
                        <NavLink to="/products">Shop</NavLink>
                    </li>
                    <li className={classes.listItem}>
                        <NavLink to="/try">Try it on</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;