import axios from "axios";
import baseUrl from "./baseUrl.ts";

import SessionManager from "../Managers/SessionManager.ts";


const httpClient = axios.create({
    headers: {
        "session" : SessionManager.TryGetToken(),
    },

    baseURL : baseUrl
});

export default httpClient;