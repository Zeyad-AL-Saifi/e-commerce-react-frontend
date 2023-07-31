import React, { useState } from "react";
import "./ProfileAddress.css";
import AddressForm from "./sections/AddressForm";
import ListOfAdress from "./sections/ListOfAdress";
const ProfileAddress = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };
  const handleSubmit = () => {
    setShowForm(false);
  };
  return (
    <>
      <h1>Addresses List</h1>
      {showForm ? (
        <AddressForm handleSubmit={handleSubmit} />
      ) : (
        <>
          <ListOfAdress />
          <div className="btn-address">
            <button className="btn btn-dark " onClick={handleClick}>
              Add New Address
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileAddress;
