import React, { useEffect, useState } from 'react';

import IArticle from '../API/Schemas/Response/article.ts';


function Article({ article }: { article: IArticle }) {

    // Hooks

    // Logic

    return (
        <div>
            <h3>{article?.title}</h3>
            <p>
                {article?.content}
                {article?.createdAt.toLocaleString()}
            </p>
        </div>
    );
}

export default Article;