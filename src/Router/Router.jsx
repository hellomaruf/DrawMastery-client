import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddArt from "../Pages/AddArt";
import ViewDetails from "../Pages/ViewDetails";
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
        element: <AddArt />,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/art/${params.id}`),
      },
    ],
  },
]);
