import React, { useEffect, useState } from "react";
// import { MAILCHIMPURL } from "../../pgccConstants";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function MailList({ status, message, onValidated }) {
  const [showMailListExpansion, setShowMailListExpansion] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleInputKeyEvent = (e) => {
    setError(null);
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    console.log("Email: ", email);

    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <div
      className={`fixed bottom-10 right-0 w-full p-4 ${
        showMailListExpansion ? "bg-gray-200" : ""
      }`}
    >
      <div className="flex justify-end items-center">
        {showMailListExpansion && (
          <div className="pr-8">
            <p className="text-lg">
              Sign up for our mailing list to become a PGCC member, get updates
              about upcoming events, and gain valuable resources.
            </p>
          </div>
        )}
        <div className="flex">
          <form type="text" onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder={
                showMailListExpansion
                  ? `Enter your email`
                  : `Subscribe to our mailing list`
              }
              className={`w-full max-w-md min-w-sm p-2 text-gray-800 rounded-md ${
                showMailListExpansion ? "" : "bg-very-pale-pink"
              }`}
              onFocus={() => setShowMailListExpansion(true)}
              onBlur={() => setShowMailListExpansion(false)}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyUp={(e) => handleInputKeyEvent(e)}
            />
            <button className="bg-cello hover:bg-slate-blue text-white p-2 rounded-md">
              {showMailListExpansion ? `Submit` : `Subscribe`}
            </button>
          </form>
        </div>
        <br />
        {/* <div className="min-h-42px">
          {status === "sending" && <div>Loading...</div>}
          {(status === "error" || error) && <div>Error: {message}</div>}
          {status === "sending" && !error && <div>Success: {message}</div>}
        </div> */}
      </div>
    </div>
  );
}

// export default MailList;

function MailListSubscribe() {
  useEffect(() => {}, []);

  const MAILCHIMPURL =
    "https://penngraduateconsultinggroup.us7.list-manage.com/subscribe/post?u=42a16ebbf91719c54d9692097&amp;id=80f39fd46d&amp;f_id=002face4f0";

  return (
    <MailchimpSubscribe
      url={MAILCHIMPURL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <MailList
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
}

export default MailListSubscribe;
