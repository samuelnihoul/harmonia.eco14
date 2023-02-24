import React from "react";
import DropdownItem from "./DropdownItem";
import dataNav from "../../data/Navbar/navbar-data.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";

const DropdownMenu = () => {

  useWindowResizeListener();

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {dataNav.map((dropdown, i) => (
          <li
            className={
              "dropdown nav-item " 
            }
            key={i}
          >
{dropdown.subMenu?<><a className="nav-link" data-toggle="dropdown">{dropdown.title}</a>            
            <DropdownItem
                item={dropdown.subMenu}
              /></>:
<a href={dropdown.link} className="nav-link" data-toggle="dropdown">

              {dropdown.title}
            </a>

            }

            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
