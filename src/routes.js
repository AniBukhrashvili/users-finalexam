import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/account";
import Feedback from "./pages/feedback";
import User from "./pages/user";
import Home from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
