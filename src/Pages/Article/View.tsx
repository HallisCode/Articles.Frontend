import React from "react";

import Article from "../../Components/Article.tsx";
import { useLoaderData } from "react-router-dom";

import getArticleById from "../../API/Requests/Articles/getById.ts";
import IArticle from "../../API/Schemas/Response/article.ts";

function ArticlePage() {
    const { article } = useLoaderData() as { article: IArticle };

    return (
        <Article article={article} />
    );
}

async function loader({ params }) {

    const article = await getArticleById(params.articleId);

    return {article};
}


export default ArticlePage;

export { loader as articleLoader };