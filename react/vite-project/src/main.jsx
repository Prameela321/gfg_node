import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./swiggy/cart.jsx";
import Error from "./swiggy/Error.jsx";
import Help from "./swiggy/Help.jsx";
import SwiggyBody from "./swiggy/swiggyBody.jsx";
import RestaurantDetails from "./swiggy/RestaurantDetails.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import RestaurantDetails from './swiggy/RestaurantDetails.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:                               <Error />,
    children: [
      {
        path: "/",
        element: <SwiggyBody />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={appRouter}></RouterProvider>
);
