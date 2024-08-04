import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { selectActiveTab, setActiveTab } from "./NavbarSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const tabList = [
    {
      tabName: "Home",
      tabPath: "",
    },
    {
      tabName: "About",
      tabPath: "about",
    },
    {
      tabName: "Events",
      tabPath: "events",
    },
    {
      tabName: "Pro Bono",
      tabPath: "pro-bono",
    },
    {
      tabName: "Sponsors",
      tabPath: "sponsors",
    },
    {
      tabName: "Resources",
      tabPath: "resources",
    },
    {
      tabName: "Calendar",
      tabPath: "calendar",
    },
  ];

  const selectedTabClassNames =
    "rounded-md px-3 py-2 text-sm font-medium bg-cello text-white";
  const unSelectedTabClassNames =
    "rounded-md px-3 py-2 text-sm font-medium text-cello hover:bg-cello hover:text-white";

  return (
    <>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-full px-8 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="w-40" src={logo} alt="PGCC LOGO"></img>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
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
                        onClick={() => {
                          dispatch(setActiveTab(tabDetails.tabPath));
                        }}
                      >
                        {tabDetails.tabName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to="/contact-us"
                      className={selectedTabClassNames}
                      onClick={() => {
                        dispatch(setActiveTab("contact-us"));
                      }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                {/* Profile section -- can be added late */}
                {/* <div>
                        <button
                            type="button"
                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            ></img>
                        </button>
                        </div>
                        <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                        >
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-0"
                        >
                            Your Profile
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-1"
                        >
                            Settings
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-2"
                        >
                            Sign out
                        </a>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
