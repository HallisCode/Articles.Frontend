import SessionManager from "../../../Managers/SessionManager.ts";
import httpClient from "../../httpClient.ts";


async function logOut() {

    const response = await httpClient.post("/authentication/logout", {});

    SessionManager.DeleteToken();
}

export default logOut;