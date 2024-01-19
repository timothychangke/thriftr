import React from "react";
import classes from '../styles/BubbleText.module.css';

function BubbleText({text}) {
    return (
        <h1 className="text-center text-5xl font-thin text-indigo-300" style={{fontSize: "60px", fontWeight: "200", color: "#8B0000"}}>
            {text.split('').map((child, idx) => (
                <span className={classes.hoverText} key={idx}>
                    {child}
                </span>
            ))}
        </h1>
    );
};

export default BubbleText;