import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/pages/home/Home";
import Signin from "./components/pages/login/Signin";
import SignUp from "./components/pages/signup/SignUp";
import AllSpots from "./components/pages/allspots/AllSpots";
import AddSpots from "./components/pages/addSpots/AddSpots";
import MyList from "./components/pages/myList/MyList";
import PrivateRoute from "./private/PrivateRoute";
import ViewDetails from "./components/pages/details/ViewDetails";
import ErrorPage from "./ErrorPage";
import Update from "./components/pages/update/Update";
import CountrySpot from "./components/pages/country-spot/CountrySpot";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('https://trip-tastic-server.vercel.app/countries'),
        element: <Home></Home>,
      },
      {
        path: "/all-spots",
        loader: () => fetch('https://trip-tastic-server.vercel.app/spots'),
        element: <AllSpots></AllSpots>,
      },
      {
        path: "/add-spot",
        element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>,
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: '/sign-in',
        element: <Signin></Signin>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/view-details/:id',
        loader: ({ params }) => fetch(`https://trip-tastic-server.vercel.app/spots/${params.id}`),
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(`https://trip-tastic-server.vercel.app/spots/${params.id}`),
        element: <PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path: 'country-details/:name',
        loader: ({params}) => fetch(`https://trip-tastic-server.vercel.app/countries/${params.name}`),
        element: <CountrySpot></CountrySpot>
      }
    ],
  },
]);

export default Routes;
