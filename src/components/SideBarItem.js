import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBarItem({name, icon, path}) {
  const { pathname } = useLocation();
  return (
    <Link
        to={path}
        className={`explorer-file ${ pathname === path && 'active' }`}
      >
      <img src={ icon } alt="icon" className="icon-side-bar"/>
      <p>{ name }</p>
    </Link>
  );
}
