import {RouterProvider, createBrowserRouter} from 'react-router-dom';


import HomePage from './pages/Home'
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import TryPage from './pages/Try';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <RootLayout />, errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <HomePage />
      }, {
        path:'/products',
        element: <ProductsPage />
      }, {
        path: "/products/:productId",
        element: <ProductDetailPage />
      },
      {
        path:'/try',
        element: <TryPage />
      }, 
      {
        path:'/cart',
        element: <Cart />
      }, 
    ]}
    
  ])
  return <RouterProvider router={router}/>
}

export default App;
