
import SessionManager from "../../../Managers/SessionManager.ts";
import UserManager from "../../../Managers/UserManager.ts";
import httpClient from "../../httpClient.ts";

import IUser from "../../Schemas/Response/user.ts"

async function login(email: string, password: string) {

    const response = await httpClient.post<IResponse>("/authentication/login", {
        email: email,
        password: password,
        appName: "freeTalkApp"
    });

    SessionManager.SetToken(response.data.token);

    UserManager.SetUser(response.data.user);
}

interface IResponse {
    token : string,
    user : IUser
}

export default login;