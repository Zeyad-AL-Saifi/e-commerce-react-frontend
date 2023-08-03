import MyOrders from "./sections/myOrders";
import "./ProfileManageOrders.css";
const ProfileManageOrders = () => {
  return (
    <>
      <div className="d-grid container">
        <h2>Number of orders #78</h2>
        <MyOrders />
        <hr />
        <MyOrders />
        <hr />
        <MyOrders />
        <hr />
        <MyOrders />
      </div>
    </>
  );
};

export default ProfileManageOrders;
