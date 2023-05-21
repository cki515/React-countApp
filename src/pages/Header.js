import { AppBar, Toolbar } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold select-none">Count App</span>
          <div className="flex-1 flex justify-end">
            <NavLink
              className={({ isActive }) =>
                (isActive ? "text-red-600" : null) + " font-bold p-5"
              }
              to="/main"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "text-red-600" : null) + " font-bold p-5"
              }
              to="/history"
            >
              History
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
