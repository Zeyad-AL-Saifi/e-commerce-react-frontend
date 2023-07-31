import React from "react";

import "./ProfileInformation.css";
import Information from "./sections/information/Information";
import ResetPassword from "./sections/reset-password/ResetPassword";

const ProfileInformation = () => {
  return (
    <>
      <Information />
      <ResetPassword />
    </>
  );
};

export default ProfileInformation;
