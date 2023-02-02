import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div style={{ height: "100%", paddingBottom: "100px" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
