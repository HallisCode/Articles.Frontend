
import React from "react";
import styles from "../CSS/UI/block.module.css";

function Block({ style, children }:
    { style?: React.CSSProperties, children?: any }) {

    return (
        <div style={style} className={styles.block}>
            {children}
        </div>
    );
}

export default Block;