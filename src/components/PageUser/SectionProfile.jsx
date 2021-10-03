import React, { useState } from "react";

const SectionProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
    full_name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    setProfileInfo({ ...profileInfo, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col justify-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-y-5 mx-auto md:w-8/12 lg:w-6/12 xl:w-5/12"
      >
        <div className="w-full flex flex-col gap-y-1">
          <span className="text-gray-500 capitalize">full name:</span>
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
          <span className="text-gray-500 capitalize">email:</span>
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
          <span className="text-gray-500 capitalize">phone number:</span>
          <input
            type="tel"
            id="phone_number"
            onChange={handleChange}
            value={profileInfo.phone_number}
            required
            className="border w-full outline-none p-2 rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <button className="p-2 bg-blue-500 text-white font-medium capitalize">
            edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionProfile;
