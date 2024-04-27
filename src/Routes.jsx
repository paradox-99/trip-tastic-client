import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/pages/home/Home";
import Signin from "./components/pages/login/Signin";
import SignUp from "./components/pages/signup/SignUp";
import AllSpots from "./components/pages/allspots/AllSpots";
import AddSpots from "./components/pages/addSpots/AddSpots";
import MyList from "./components/pages/myList/MyList";
import PrivateRoute from "./private/PrivateRoute";

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
        path: "/all-spots",
        element: <AllSpots></AllSpots>,
      },
      {
        path: "/add-spot",
        element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>,
      },
      {
        path: "/my-list",
        element: <MyList></MyList>,
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
