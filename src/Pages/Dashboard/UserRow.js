import React from "react";

const UserRow = ({ user }) => {
  return (
    <tr>
      <th>{user._id}</th>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserRow;
