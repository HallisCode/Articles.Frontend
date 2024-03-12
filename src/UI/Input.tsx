
import React, { HTMLInputTypeAttribute } from "react";
import styles from "../CSS/UI/input.module.css";

function Input({ children, placeholder, onChange , value, type}:
    {
        children?: any, placeholder?: string,
        onChange? : React.ChangeEventHandler<HTMLInputElement>,
        value? : string,
        type? : React.HTMLInputTypeAttribute
    }) {

    return (
        <input type={type} className={styles.input} placeholder={placeholder} onChange={onChange} value={value} />
    );
}

export default Input;