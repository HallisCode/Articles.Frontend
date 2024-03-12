import { Outlet, redirect, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import SessionManager from "../../Managers/SessionManager.ts";

function AuthRequired() {

    // Hooks

    const navigate = useNavigate();

    useEffect(() => {
        const token : string | null = SessionManager.TryGetToken();

        if (token == null)
        {
            navigate("/login");
        }


    }, []);

    return (
        <Outlet />
    );
}

export default AuthRequired;