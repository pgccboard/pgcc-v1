import logo from "../../assets/logo.png";

function Navbar() {
  return (
    // gray-suit": "#C5BECF",
    // cello: "#1C2F58",
    // tamarillo: "#9D152C",
    // cadillac: "#B65262",
    <>
      <nav className="bg-gray-suit">
        <div className="mx-auto max-w-full px-8 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="w-40" src={logo} alt="PGCC LOGO"></img>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/home"
                    className="rounded-md px-3 py-2 text-sm font-medium 
                            bg-cello text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="rounded-md px-3 py-2 text-sm font-medium text-cello 
                    hover:bg-cello hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="/events"
                    className="rounded-md px-3 py-2 text-sm font-medium text-cello 
                    hover:bg-cello hover:text-white"
                  >
                    Events
                  </a>
                  <a
                    href="/pro-bono"
                    className="rounded-md px-3 py-2 text-sm font-medium text-cello 
                    hover:bg-cello hover:text-white"
                  >
                    Pro Bono
                  </a>
                  <a
                    href="/sponsors"
                    className="rounded-md px-3 py-2 text-sm font-medium text-cello 
                    hover:bg-cello hover:text-white"
                  >
                    Sponsors
                  </a>
                  <a
                    href="/resources"
                    className="rounded-md px-3 py-2 text-sm font-medium text-cello 
                    hover:bg-cello hover:text-white"
                  >
                    Resources
                  </a>
                  <a
                    href="/calendar"
                    className="rounded-md px-3 py-2 text-sm font-medium text-cello 
                    hover:bg-cello hover:text-white"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/contact-us"
                      className="rounded-md bg-cello px-3 py-2 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Contact Us
                    </a>
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
