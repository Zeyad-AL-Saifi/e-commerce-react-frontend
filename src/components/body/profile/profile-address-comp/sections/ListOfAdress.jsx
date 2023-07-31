import React from "react";
import AddressItem from "./AddressItem";

const ListOfAdress = () => {
  return (
    <>
      <div className="listOfAddress mb-4 ">
        <AddressItem />
        <AddressItem />
        <AddressItem />
        <AddressItem />
      </div>
    </>
  );
};

export default ListOfAdress;
