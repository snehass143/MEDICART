import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Listcontainer from "./components/Listcontainer";
import  Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/logout";
import Addmed from "./components/curd/create";
import Viewmed from "./components/curd/view";
import Update from "./components/curd/update";
import Searchpage from "./components/curd/searchpage";
import Search from "./components/curd/search";
import TestPage from "./components/Testpage";
import Homepage from "./components/homepage";



const router = createBrowserRouter([
    { path: 'app', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'List', element: <Listcontainer /> },
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
    { path: 'logout', element:<Logout/>},
    { path: 'addmed', element: <Addmed /> },
    { path: 'view/:id', element: <Viewmed /> },
    { path: 'update/:id', element: <Update /> },
    {path: 'search' , element:<Searchpage/> },
    {path:'medsearch' , element:<Search/>},
    {path:'testpage' , element:<TestPage/>},
    {path:'/' , element:<Homepage/>}


]);
export default router;
