import { createBrowserRouter } from "react-router-dom";
import AboutUs from './views/AboutUs';
import Login from './views/Login';
import Register from './views/Register';
import Mainview from './views/Mainview';
import AvatarList from './views/AvatarList';


const router = createBrowserRouter([

    {
        path:'/',
        element:<AboutUs/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/streeam',
        element:<Mainview/>
    },
    {
        path:'/avatarlist',
        element:<AvatarList/>
    }

]);
export default router;
