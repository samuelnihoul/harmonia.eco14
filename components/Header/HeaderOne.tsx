'use client'
import React, { useState, useEffect, useCallback } from "react";
import DropdownMenu from "../Navs/DropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import CartSearchTop from "../Navs/CartSearchTop";
const HeaderOne = ({ type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu?.classList.remove("in") : menu?.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);



  const hideSearchForm = (e: any) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full " +
          (fixed || type === "white" ? "" : "navbar-transparent")
        }
      >
        <SearchOverlay show={show} onClick={hideSearchForm} />
        <div className="container">
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <i className="icofont-navigation-menu"></i>
          </button>
          <MainLogo  ></MainLogo>
          <DropdownMenu />
          <AttributeNav>
            <CartSearchTop showSearchForm={undefined} />


          </AttributeNav>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
