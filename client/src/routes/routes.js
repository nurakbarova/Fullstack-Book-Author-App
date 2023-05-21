import { Children } from "react";
import MainRoot from "../pages/MainRoot";
import HomePages from "../pages/HomePages";
import Authors from "../pages/Authors";
import EditAuthor from "../pages/EditAuthor";
import AddAuthor from "../pages/AddAuthor";
import AuthorDetail from "../pages/AuthorDetail";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                elemet: <HomePages />
            },
            {
                path: "author",
                element: <Authors />
            },

            {
                path: "editauthor",
                element: <EditAuthor />

            },
            {
                path:"addauthor",
                element:<AddAuthor/>
            },
            {
                path:"authordetail",
                element:<AuthorDetail/>
            }
        ]
    }
]