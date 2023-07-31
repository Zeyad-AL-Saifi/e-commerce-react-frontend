import React from "react";

const AddressForm = ({ handleSubmit }) => {
  return (
    <>
      <form className="address-form" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Name of address like(word, home)"
        />
        <textarea className="form-control" placeholder="the address " />
        <input
          className="form-control"
          type="number"
          placeholder="Phone Number"
        />
        <button type="submit" className="btn btn-dark ">
          Add address
        </button>
      </form>
    </>
  );
};

export default AddressForm;
