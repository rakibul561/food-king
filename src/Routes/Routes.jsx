import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Pagse/Home";
import OurMenu from "../Component/Home/Pagse/OurMenu";
import OrderFood from "../Component/Home/Pagse/OrderFood";


   export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourmenu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/orderfood',
          element:<OrderFood></OrderFood>
        }
      ]
  },
  ]);