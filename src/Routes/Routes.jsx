import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from './../pages/Home/Home/Home';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";


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
          path: "addtoy",
          element: <AddToy></AddToy>
        },
        {
          path: "/alltoys",
          element: <AllToy></AllToy>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: "/toy/:id",
          element: <ToyDetails></ToyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
          
        },
        {
          path: "/mytoys",
          element: <MyToys></MyToys>,
        },
      ],
    },
  ]);

export default router;