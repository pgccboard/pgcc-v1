import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import {
  CONTACTUS,
  CONTACTUSHEADER,
  CONTACTUSSUBHEADER,
} from "../../pgccConstants";

function ContactUs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab(CONTACTUS));
  }, []);

  return (
    <>
      <Banner title={CONTACTUSHEADER} subTitle={CONTACTUSSUBHEADER} />

      <div className="pt-20 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <div className="py-12 px-8 rounded-lg border border-solid border-gray-200 mx-4 lg:w-2/3">
            <form
              action="https://formcarry.com/s/bU95g7EUxl8"
              method="POST"
              acceptCharset="UTF-8"
            >
              <div className="lg:flex">
                <input
                  type="text"
                  className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 mr-2 my-2 w-full lg:w-1/2"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="email"
                  className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 my-2 w-full lg:w-1/2"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <textarea
                rows="4"
                className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 mr-2 my-2 w-full"
                placeholder="Write your message..."
                name="message"
              />
              <input type="hidden" name="_gotcha" />

              <input
                type="hidden"
                id="captchaResponse"
                name="g-recaptcha-response"
              />

              <div className="flex justify-center mt-4">
                <input
                  type="submit"
                  name="submit"
                  value="Send Message"
                  className="bg-blue-900 hover:bg-blue-800 rounded text-white tracking-wider py-4 px-8 sm:px-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-16"></div>
    </>
  );
}

export default ContactUs;
