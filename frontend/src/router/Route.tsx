import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Menu from "../Pages/Menu";
import Msection from "../Pages/Section1";
import SignupForm from "../Pages/signup";
import LoginForm from "../Pages/login";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Msection/>
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/Signup',
                element: <SignupForm/>
            },
            
        ]

    }
])