import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchProvider } from "./contexts/Search.jsx";
import "./index.css";
//the pages
import Layout from "./Components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import Error from "./pages/Error.jsx";
import Movies from "./pages/Movie.jsx";
import AllMovies from "./pages/AllMovies.jsx";
// the react router
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "movies/:id", element: <Movies /> },
      { path: "movies", element: <AllMovies /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={route} />
    </SearchProvider>
  </StrictMode>
);
