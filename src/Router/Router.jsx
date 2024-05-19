import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from './../Pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      
    ],
  },

  
]);

export default router;
