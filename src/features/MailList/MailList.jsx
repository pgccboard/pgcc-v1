import React, { useState } from "react";

function MailList() {
  const [showMailListExpansion, setShowMailListExpansion] = useState(false);

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
          />
          <button className="bg-cello hover:bg-slate-blue text-white p-2 rounded-md">
            {showMailListExpansion ? `Submit` : `Subscribe`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailList;
