import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom"

import classes from '../styles/RootLayout.module.css'

function RootLayout() {
    return (
        <>
        <MainNavigation />
        <main className={classes.content}>
            <Outlet />
        </main>
        </>
        
    )
}

export default RootLayout