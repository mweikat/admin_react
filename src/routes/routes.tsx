import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Login } from "../auth/login/login";
import { Register } from "../auth/register/register";
import Layout from "../admin/main/layout/layout";
import ProtectedRoutes from "./protected";
import { MyAccount } from "../admin/pages/myAccount/myAccount";
import { ResetPassword } from "../auth/reset-password/reset-password";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
      path:"/auth/login",
      element:<Login/>,
    },
    {
      path:"/auth/register",
      element:<Register/>,
    },
    {
      path:"/auth/reset-password",
      element:<ResetPassword/>,
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
          path:"/admin/*",
          element:<Layout/>,
          children:[
            { 
              path:"account",
              element:<MyAccount/>
            }
          ]
        },
        
      ]
    },
]);

export const Routes = () =>{
    return (<RouterProvider router={router}/>)
}
