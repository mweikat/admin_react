import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Login } from "../auth/login/login";
import { Register } from "../auth/register/register";
import Layout from "../admin/main/layout/layout";
import ProtectedRoutes from "./protected";
import { MyAccount } from "../admin/pages/myAccount/myAccount";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/register",
      element:<Register/>,
    },
    {
      path:"*",
      element:<div>404</div>
    },
    {
      path:"/",
      element:<ProtectedRoutes/>,
      children:[
        { 
          path:"/home",
          element:<Layout/>
        },
        { 
          path:"/account",
          element:<MyAccount/>
        }
      ]
    },
]);

export const Routes = () =>{
    return (<RouterProvider router={router}/>)
}
