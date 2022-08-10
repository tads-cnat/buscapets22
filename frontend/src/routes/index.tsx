import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { isAuthenticated } from "../auth/isAuthenticated";
import Home from "../pages/Home/index";

/*const ProtectedRoutes: React.FunctionComponent = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
*/
const SystemRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default SystemRoutes;
