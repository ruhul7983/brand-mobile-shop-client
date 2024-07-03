import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './pages/Home/Home';
import PhoneDetails from './pages/PhoneDetails/PhoneDetails';
import AddBanner from './pages/AddBanner/AddBanner';
import AddMobile from './pages/AddMobile/AddMobile';
import AddCategory from './pages/AddCategory/AddCategory';
import BrandPhones from './pages/BrandPhones/BrandPhones';
import UpdatePhone from './pages/UpdatePhone/UpdatePhone';
import EditPhone from './pages/EditPhone/EditPhone';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './pages/Routes/PrivateRoute';
import AuthProvider from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://brand-mobile-shop.onrender.com/banner"),
      },
      {
        path: "phones/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: ({ params }) => fetch(`https://brand-mobile-shop.onrender.com/phones/${params.id}`)
      },
      {
        path: "phones/category/:link",
        element: <BrandPhones></BrandPhones>,
        loader: ({ params }) => fetch(`https://brand-mobile-shop.onrender.com/phones/category/${params.link}`)
      },
      {
        path: "/add-banner",
        element: <AddBanner></AddBanner>,
      },
      {
        path: "/add-mobile",
        element: <AddMobile></AddMobile>,
      },
      {
        path: "/add-category",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update-phone",
        element: <UpdatePhone></UpdatePhone>,
        loader: () => fetch("https://brand-mobile-shop.onrender.com/phones/")

      },
      {
        path: "/edit-phone/:id",
        element: <EditPhone></EditPhone>,
        loader: ({ params }) => fetch(`https://brand-mobile-shop.onrender.com/phones/${params.id}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
