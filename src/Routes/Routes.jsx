import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from './../pages/Home/Home/Home';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage";
import AddToy from "../pages/addToy/addToy";
import AllToy from "../pages/AllToy/AllToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToyTabs from "../components/ToyTabs/ToyTabs";
import Blogs from "../pages/Blogs/Blogs";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
          path: "/addToy",
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: "/allToys",
          element: <AllToy></AllToy>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: "/toy/:id",
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
          
        },
        {
          path: "/myToys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
          loader: () => fetch("http://localhost:5000/blogs")
        }
        
      ],
    },
  ]);

export default router;