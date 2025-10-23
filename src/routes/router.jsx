import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/auth',
        element: <h1>Authentication layout</h1>
    },
    {
        path: '/news',
        element: <h1>News layout</h1>
    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    }
]);

export default router;