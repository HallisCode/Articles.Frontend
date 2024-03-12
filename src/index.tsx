import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter, } from 'react-router-dom';

import AuthRequired from './Pages/Rules/AuthRequired.tsx';

import LoginPage from './Pages/LoginPage.tsx';

import UserPage, { userLoader } from './Pages/UserPage.tsx';
import RootPage from './Pages/RootPage.tsx';
import ArticlePage, {articleLoader} from './Pages/Article/View.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRequired />,
        children: [
            {
                path: "/",
                element: <RootPage />,
                children: [
                    {
                        path: "/user/:userId",
                        element: <UserPage />,
                        loader: userLoader
                    },
                    {
                        path: "/article/:articleId",
                        element: <ArticlePage />,
                        loader: articleLoader
                    },

                ]
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(

    <RouterProvider router={router} />

);
