import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./component/form/form";
import Payment from "./component/payment/payment";
import Reviewproduct from "./component/reviewproduct/reviewproduct";
import Summaryproduct from "./component/selecticecream/summaryproduct/summaryproduct";
import Summayselecticecream from "./component/selecticecream/summaryselecticecream/summayselecticecream";
import Icecream from "./component/selecticecream/icecream";
import Servingtype from "./component/selecticecream/servingtype";
import Source from "./component/selecticecream/source";
import Topping from "./component/selecticecream/topping";
import Slectshipping from "./component/selectshipping/slectshipping";
import Delivery from "./component/selectshipping/delivery";
import Employee from "./component/Empolyee/employee";
import Employeereviewproduct from "./component/Empolyee/employeereviewproduct";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/Employee",
    element: <Employee />,
  },
  {
    path: "/Employeereviewproduct",
    element: <Employeereviewproduct />,
  },
  {
    path: "/Payment/:ItemID",
    element: <Payment />,
  },
  {
    path: "/Reviewproduct/:ItemID",
    element: <Reviewproduct />,
  },
  {
    path: "/Summaryproduct",
    element: <Summaryproduct />,
  },
  {
    path: "/Summayselecticecream/:ItemID",
    element: <Summayselecticecream />,
  },
  {
    path: "/Icecream/:id",
    element: <Icecream />,
  },
  {
    path: "/Servingtype/:customerId/:icecream/:Topping/:sauce",
    element: <Servingtype />,
  },
  {
    path: "/Source/:customerId/:icecream/:Topping",
    element: <Source />,
  },
  {
    path: "/Topping/:customerId/:icecream",
    element: <Topping />,
  },
  {
    path: "/Slectshipping/:ItemID",
    element: <Slectshipping />,
  },
  {
    path: "/Delivery/:ItemID",
    element: <Delivery />,
  },
]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
