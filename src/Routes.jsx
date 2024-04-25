import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/pages/home/Home";
import Signin from "./components/pages/login/Signin";
import SignUp from "./components/pages/signup/SignUp";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/sign-in',
        element: <Signin></Signin>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      }
    ],
  },
]);

export default Routes;
