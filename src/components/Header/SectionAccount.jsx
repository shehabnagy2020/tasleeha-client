import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const SectionAccount = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <a
      href={userInfo?.full_name ? "/user" : "/login"}
      className="flex flex-col items-center justify-center text-gray-400 text-base "
    >
      <div className="flex items-center justify-center rounded-full lg:border lg:p-2">
        <i className="material-icons">perm_identity</i>
      </div>
      <span className="capitalize flex lg:hidden">الحساب</span>
    </a>
  );
};

export default SectionAccount;
