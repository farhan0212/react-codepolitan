import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout ";

import Homepage from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import ErrorPage from "../components/ErrorPage";

import { getPostById, posts } from "../apis/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "/blog", element: <Blog />, loader: posts },
      { path: "/blog/:id", element: <Post />, loader: getPostById },
    ],
  },
]);
