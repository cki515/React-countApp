import { AppBar, Toolbar } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <NavLink to="/main" className="font-bold select-none flex self-stretch items-center text-2xl">
            Workout Count App
          </NavLink>
          <div className="flex-1 flex self-stretch justify-end mr-5">
            {location.pathname !== "/history" && (
              <NavLink to="/history" className="select-none flex items-center">
                History
              </NavLink>
            )}
            {location.pathname === "/history" && (
              <NavLink to="/main" className="select-none flex items-center">
                Home
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
