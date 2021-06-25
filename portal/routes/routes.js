import React from "react";
import Login from "../components/Login/Login";


export const authRoutes = [
    {
        path:'/',
        exact: true,
        component: <Login />
    },
    {
        path: "/reset-password",
        exact: true,
        component: <div>soon</div>
    }
]

export const appRoutes = [
    {
        path: '/',
        exact: true,
        component: <div>Profile</div>
    }
]