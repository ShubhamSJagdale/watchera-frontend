import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ header, heroLine, btnName, redirectUrl }) => {
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="login_part_text text-center">
          <div className="login_part_text_iner">
            <h2>{header}</h2>
            <p>{heroLine}</p>
            <NavLink to={redirectUrl} className="btn_3">
              {btnName}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
