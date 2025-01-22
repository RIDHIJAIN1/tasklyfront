import React from "react";
import UserList from "../components/UserList";
import UserListHeader from "../components/UserListHeader";

const Admin = () => {
  return (
    <div>
      <UserListHeader />
      <UserList />
    </div>
  );
};

export default Admin;
