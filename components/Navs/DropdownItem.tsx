import React from "react";
import Link from "next/link";

const DropdownItem = ({ item }) => {

  const handleOpen = (e:any) => {
    const el = e.target;
    if (el.nextSibling) {
      e.preventDefault();
      if (el.parentElement.classList.contains("on")) {
        el.parentElement.classList.add("on");
        el.nextSibling.style.display = "block";
      } else {
        el.nextSibling.style.display = "none";
        el.parentElement.classList.remove("on");
        el.nextSibling.style.opacity = 1;
        el.nextSibling.classList.add("fadeIn");
      }
    }
  };

  return (
    <ul className="dropdown-menu dropdown-item animated" role="menu">
      {item.map((val:{title:string,link:string,subMenu:{link:string,title:string}[]}, i:number) => (
        <li key={i} className="dropdown">
          <a

            data-toggle="dropdown"
            href={val.link}

          >
            <a
              onClick={ (e) => handleOpen(e)}
              className={"dropdown-item "   }>{val.title}</a>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownItem;
