import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{ padding: "30px 100px 100px 100px" }}
      className="row row-cols-1 row-cols-lg-2 row-cols-xl-3"
    >
      <div className="col mx-auto">

    <Outlet />

   </div>
    </div>
  );
};

export default Layout;
