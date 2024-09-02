import { Link } from "react-router-dom";
import { FooterContent } from "../../pgccConstants";

const Footer = () => {
  return (
    <>
      <footer className="py-6 px-6 mt-12 text-gray-800 bg-gradient-to-bl from-light-lavender to-transparent">
        <div className="flex">
          <div className="flex-1 px-3 border-r border-cadillac">
            <h2 className="text-base md:text-lg font-bold">About Us</h2>
            <p className="mt-5 text-sm md:text-base">
              Premiere student-run consulting club at the University of
              Pennsylvania, 500+ members strong.
            </p>
          </div>
          {FooterContent.map((footerItem) => {
            return (
              <div className="flex-1 px-3">
                <h2 className="text-base md:text-lg font-bold">
                  {footerItem.footerHeading}
                </h2>
                <ul className="mt-4 leading-loose text-sm md:text-base text-tamarillo">
                  {footerItem.footerList.map((footerListItem) => {
                    return (
                      <li>
                        <Link to={footerListItem.routeTo} target="_blank">
                          {footerListItem.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
      <div className="flex justify-center py-4 border-t bg-gradient-to-tl from-light-lavender to-transparent">
        <p className="text-gray-600 text-sm text-center">
          Penn Graduate Consulting Club © 2024, all rights reserved. Website
          developed by{" "}
          <Link
            className="text-cello"
            to={`https://github.com/Shreyas0812`}
            target="_blank"
          >
            Shreyas Raorane
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
