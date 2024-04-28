import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddArt from "../Pages/AddArt";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import MyArt from "../Pages/MyArt";
import AllArts from "../Pages/AllArts";
import UpdateArts from "../Pages/UpdateArts";
import Category from "../Pages/Category";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/art"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addArt",
        element: (
          <PrivateRoute>
            <AddArt />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/art/${params.id}`),
      },
      {
        path: "/myArt",
        element: (
          <PrivateRoute>
            <MyArt />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArts",
        element: <AllArts />,
        loader: () => fetch("http://localhost:3000/art"),
      },
      {
        path: "/updateArts/:id",
        element: (
          <PrivateRoute>
            <UpdateArts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/updateArts/${params.id}`),
      },
      {
        path: "/category/:name",
        element: <Category />,
        loader: ({params})=>fetch(`http://localhost:3000/artCategory/${params.name}`)
      },
    ],
  },
]);
