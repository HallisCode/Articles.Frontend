import React from "react";


import styles from "../CSS/UI/button.module.css";



function Button({children, type} : {children? : any, type? : "button" | "reset" | "submit" | undefined})
{
    return (
        <button type={type} className={styles.button}>
            {children}
        </button>
    );
}

export default Button;