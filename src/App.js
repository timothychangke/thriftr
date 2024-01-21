import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react'

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import TryPage from './pages/Try';
import ErrorPage from './pages/Error';
import Cart from './pages/Cart';
// const LazyProducts = React.lazy(() => import('./pages/Products'));

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/products',
                    element: <ProductsPage />
                    // element: <React.Suspense fallback="Loading..."><LazyProducts /></React.Suspense>
                },
                {
                    path: '/try',
                    element: <TryPage />
                },
                {
                    path: '/cart',
                    element: <Cart />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;
