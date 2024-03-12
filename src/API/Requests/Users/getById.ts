import httpClient from "../../httpClient.ts";

import IArticle from "../../Schemas/Response/article.ts";
import IUser from "../../Schemas/Response/user.ts";

async function getById(id: number): Promise<IUser> {

    const response = await httpClient.get<IUser>("/user/getById/", { params: { id: id } });

    return response.data;
}

export default getById;