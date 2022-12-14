import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import SpotDetails from "../../components/SpotDetails/SpotDetails";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://travel-server-pi.vercel.app/spots')
            },
            {
                path: '/spots/:id',
                loader: ({params}) => fetch(`https://travel-server-pi.vercel.app/spots/${params.id}`),
                element: <SpotDetails />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])