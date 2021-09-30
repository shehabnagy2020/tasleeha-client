import React, { useState } from "react";

const SectionAccount = () => {
  const [isLogged] = useState(false);

  return (
    <a
      href={isLogged ? "/profile" : "/login"}
      className="flex flex-col items-center justify-center text-gray-400 text-base "
    >
      <div className="flex items-center justify-center rounded-full lg:border lg:p-2">
        <i className="material-icons">perm_identity</i>
      </div>
      <span className="capitalize flex lg:hidden">account</span>
    </a>
  );
};

export default SectionAccount;
