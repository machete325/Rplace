import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import {
    Slide,
    ToastContainer,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { HomePage } from './pages/home/HomePage';
import { Root } from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <div>Incorrect page</div>,
        children: [
            {
                path: '/home',
                element: <HomePage/>,
            },
            {
                path: '/rplace',
                element: <div>rplace</div>,
            },
            {
                path: '/mobile',
                element: <div>mobile</div>,
            },
            {
                path: '/charts',
                element: <div>charts</div>,
            },
            {
                path: '/wifi',
                element: <div>wifi</div>,
            },
            {
                path: '/bluetooth',
                element: <div>bluetooth</div>,
            },
            {
                path: '/settings',
                element: <div>settings</div>,
            },
        ],
    },
]);

export const App = () => {
    return (
        <React.Fragment>
            <RouterProvider router={router}/>

            <ToastContainer
                transition={Slide}
                position='bottom-center'
            />
        </React.Fragment>
    );
};
