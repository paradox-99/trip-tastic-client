import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/pages/home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ],
  },
]);

export default Routes;
