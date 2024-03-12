import { useState } from "react";
import login from "../../API/Requests/Authentication/login.ts";
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../CSS/Forms/login.module.css";
import Button from "../../UI/Button.tsx";
import Input from "../../UI/Input.tsx";

function LoginForm()
{
    const [loginValue, setLogin] = useState("");

    const [passwordValue, setPassword] = useState("");

    const navigate = useNavigate();


    function TryLogin(event)
    {   
        event.preventDefault();

        login(loginValue, passwordValue);

        navigate("/");
    }

    return (
        <form onSubmit={TryLogin} className={styles.loginForm}>
            <label>Login</label>
            <Input placeholder="Enter name of your wife..." value={loginValue} onChange={(e) => setLogin(e.target.value)}/>

            <label>Password</label>
            <Input type="password" placeholder="Enter name of your pet..." value={passwordValue} onChange={(e) => setPassword(e.target.value)}/>

            <Button type="submit">LogIn</Button>
        </form>
    );
}

export default LoginForm;