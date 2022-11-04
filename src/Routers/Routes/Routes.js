import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
   {
     path: '/',
     element: <Main></Main>,
     children: [
        {

            path:'/',
            element: <Home></Home>
        },
        {
    
            path:'/home',
            element: <Home></Home>
        },
        {
    
            path:'/login',
            element: <Login></Login>
        },
        {
    
            path:'/signup',
            element: <Signup></Signup>
        },
        {
    
            path:'/checkout/:id',
            element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
            loader: ({params}) => fetch(`https://genius-car-server-chi.vercel.app/services/${params.id}`)
        },
        {
    
            path:'/orders',
            element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            
        },
     ]
}

]);
export default router;