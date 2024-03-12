import React from "react";
import { Outlet } from "react-router-dom";

import styles from "../CSS/Layout/root.module.css";

function RootPage() {
    return (
        <div className={styles.centerScreen}>
            <div className={styles.navigationContainer}>
                
            </div>
            <div className={styles.contentContainer}>
                <Outlet />
            </div>
        </div>
    );
}

export default RootPage;