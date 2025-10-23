import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home page</h1>
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