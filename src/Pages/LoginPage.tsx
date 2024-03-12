import React, { useState } from "react";
import Login from "../Components/Forms/LoginForm.tsx";

import styles from "../CSS/Layout/login.module.css";
import Block from "../UI/Block.tsx";

function LoginPage() {

    const cosmeticBlock : React.CSSProperties = {
        position : "absolute",
        width : "190px",
        height : "180px",
        border : "2px solid black",
        backgroundColor : "transparent",
        margin : "-75px 0px 0px -75px",
        zIndex : "-999"
    }

    const logicBlock : React.CSSProperties = {
        width : "190px",

    }

    const title : React.CSSProperties = {
        position : "absolute",
        fontSize : 28,
        margin : "-345px 0px 0px -175px",

    }

    return (
        <div className={styles.centerScreen}>
            <span style={title}>Free/Talk</span>
            <Block style={cosmeticBlock}/>
            <Block style={logicBlock}>
                <Login/>
            </Block>
        </div>
    );
}

export default LoginPage;