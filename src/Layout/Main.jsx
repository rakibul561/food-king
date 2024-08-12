import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Shared/Navbar";
import { FoodBank } from "@mui/icons-material";
import Footter from "../Shared/Footter";


const Main = () => {
    return (
        <div>

          <ResponsiveAppBar></ResponsiveAppBar>
            <Outlet></Outlet>
            <Footter></Footter>
            
        </div>
    );
};

export default Main;