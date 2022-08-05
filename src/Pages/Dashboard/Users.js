import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading } = useQuery(["user"], () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  } else {
    console.log(`Value Undefined`);
  }
  return (
    <div>
      <h1>Total users: {users.length}</h1>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
