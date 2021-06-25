import React from "react";


export const authRoutes = [
    {
        path:'/',
        exact: true,
        component: <div>Login</div>
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