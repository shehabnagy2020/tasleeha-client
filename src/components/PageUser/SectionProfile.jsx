import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

const SectionProfile = () => {
  const { userInfo, userLoader, handleEditUser } = useContext(UserContext);
  const [profileInfo, setProfileInfo] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setProfileInfo({ ...userInfo });
  }, [userInfo]);

  const handleChange = (e) => {
    let { id, value } = e.target;
    setProfileInfo({ ...profileInfo, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(profileInfo);
  };

  return (
    <div className="w-full flex flex-col justify-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-y-5 mx-auto md:w-8/12 lg:w-6/12 xl:w-5/12"
      >
        <div className="w-full flex flex-col gap-y-1">
          <span className="text-gray-500 capitalize">الاسم كامل:</span>
          <input
            type="text"
            id="full_name"
            onChange={handleChange}
            value={profileInfo.full_name}
            required
            className="border w-full outline-none p-2 rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <span className="text-gray-500 capitalize">البريد الالكتروني:</span>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            value={profileInfo.email}
            required
            className="border w-full outline-none p-2 rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <span className="text-gray-500 capitalize">رقم الهاتف</span>
          <input
            type="tel"
            id="phone"
            onChange={handleChange}
            value={profileInfo.phone}
            required
            className="border w-full outline-none p-2 rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-y-1">
          {userLoader.editUserError && (
            <div className="mb-2">
              <span className="text-red-500">{userLoader.editUserError}</span>
            </div>
          )}
          {userLoader.editUser ? (
            <div className="transition-all animate-pulse">
              <span className="material-icons text-blue-500 text-4xl">
                pending
              </span>
            </div>
          ) : (
            <button className="p-2 bg-blue-500 text-white font-medium capitalize">
              تعديل
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SectionProfile;
