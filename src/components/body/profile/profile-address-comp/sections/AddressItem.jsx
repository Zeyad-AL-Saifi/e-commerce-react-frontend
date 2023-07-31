import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const AddressItem = () => {
  return (
    <>
      <div className="address-item mb-4">
        <div className="row container ">
          <div className="col-10">
            <div className="row">
              <h4 className="col">Home</h4>
            </div>
            <div className="row">
              <div className="col">
                alhadhmi alhamali/amman/jordan/building number 17
              </div>
            </div>
            <div className="row">
              <div className="col">Phone number :+962789149148</div>
            </div>
          </div>
          <div className="col-2  modif">
            <div className="edit">Edit</div>
            <div className="delete ">
              <MdDeleteOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressItem;
