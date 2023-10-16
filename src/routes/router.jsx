import {
    createBrowserRouter,
  } from "react-router-dom";
import Default from "./Default";
import Homepage from "../components/Homepage";
import IndividualItemBreakfast from "../components/individualItem/IndividualItemBreakfast";
import IndividualItemLunch from "../components/individualItem/IndividualItemLunch";
import IndividualItemDinner from "../components/individualItem/IndividualItemDinner";
import Cart from "../components/Cart/cart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Default></Default>,
      children:[
        {
            path: "/",
            element: <Homepage></Homepage>
        },
        {
          path:"/cart",
          element: <Cart></Cart>
        },
        {
          path: "/individualBreakfast/:id",
          element: <IndividualItemBreakfast></IndividualItemBreakfast>
        },
        {
          path: "/individualLunch/:id",
          element: <IndividualItemLunch></IndividualItemLunch>
        },
        {
          path: "/individualDinner/:id",
          element: <IndividualItemDinner></IndividualItemDinner>
        },
      ]
    },
  ]);
