import httpClient from "../../httpClient.ts";

import IArticle from "../../Schemas/Response/article.ts";

async function getById(id: number): Promise<IArticle> {

    const response = await httpClient.get<IArticle>("/article/getById/", { params: { id: id } });

    return response.data;
}

export default getById;