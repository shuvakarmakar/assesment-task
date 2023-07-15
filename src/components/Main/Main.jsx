import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import './Main.css'

const Main = () => {
    return (
        <div id="main">
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;