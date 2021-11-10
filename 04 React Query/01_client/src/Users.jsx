import React from "react";
import {useQuery} from "react-query";
import * as api from "./usersApi";

const Users = ({setUserId}) => {
  const {data, isLoading, isError, error} = useQuery("users", api.getUsers, {retry: false});
  // console.log("data, isLoading, isError, error:", data, isLoading, isError, error);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    // console.log("error:", error);
    return <div>Something went wrong... {error?.message}</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <button onClick={() => setUserId(user.id)}>View User</button>&nbsp; {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
