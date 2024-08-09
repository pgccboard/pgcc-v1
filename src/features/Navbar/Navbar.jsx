import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectActiveTab } from "./NavbarSlice";

import LOGO from "../../assets/logo.png";
import HAMBURGERMENU from "../../assets/hamburger-menu.png";
import { CONTACTUS, tabList } from "../../pgccConstants";
import { useState } from "react";

function Navbar() {
  const activeTab = useSelector(selectActiveTab);

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const selectedTabClassNames =
    "rounded-md px-5 py-2 text-sm font-medium bg-cello text-white";
  const unSelectedTabClassNames =
    "rounded-md px-5 py-2 text-sm font-medium text-cello hover:bg-cello hover:text-white";

  return (
    <>
      <nav className="bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className=" mx-auto max-w-screen-2xl flex flex-wrap items-center justify-between px-4 h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <img className="w-32 sm:w-40" src={LOGO} alt="PGCC LOGO" />
          </div>

          {/* CONTACT US and HAMBURGER MENU */}
          <div className="flex xl:order-2 space-x-3 xl:space-x-0">
            <Link to={`/${CONTACTUS}`} className={selectedTabClassNames}>
              Contact Us
            </Link>

            <div
              className="inline-flex items-center p-2 w-10 h-10 justify-center block xl:hidden"
              onClick={toggleMobileMenu}
            >
              <img src={HAMBURGERMENU} alt="Expand" />
            </div>
          </div>

          {/* TABSLIST TABS */}
          <div
            className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
            id="navbar-sticky"
          >
            {tabList.map((tabDetails) => {
              return (
                <Link
                  key={tabDetails.tabPath}
                  to={tabDetails.tabPath}
                  className={
                    activeTab == `${tabDetails.tabPath}`
                      ? selectedTabClassNames
                      : unSelectedTabClassNames
                  }
                >
                  {tabDetails.tabName}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Expansion of Hamburger Menu */}

        <div
          className={` ${
            isHamburgerMenuOpen ? "absolute" : "hidden"
          } right-0 w-48 mt-2 z-10 bg-gray-100 py-1 shadow-lg`}
        >
          <ul>
            {tabList.map((tabDetails) => (
              <li key={`${tabDetails.tabPath}`}>
                <Link
                  to={tabDetails.tabPath}
                  className={
                    activeTab === `${tabDetails.tabPath}`
                      ? "block bg-cello text-white px-4 py-2 text-sm"
                      : "block px-4 py-2 text-sm text-cello hover:bg-cello hover:text-white"
                  }
                  onClick={() => setIsHamburgerMenuOpen(false)}
                >
                  {tabDetails.tabName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
