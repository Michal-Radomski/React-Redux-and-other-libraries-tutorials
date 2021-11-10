import React from "react";
import {useQuery} from "react-query";

import * as api from "./usersApi";
import UserForm from "./UserForm";

const UserDetails = ({userId}: {userId: number | any}): JSX.Element => {
  const [isEditing, setIsEditing] = React.useState(false);
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery(["user", userId], () => api.getUser(userId), {enabled: Boolean(userId)});

  if (!userId) {
    return <div>Select a User</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log("isEditing:", isEditing);
  return (
    <React.Fragment>
      <div onClick={() => setIsEditing(!isEditing)}>
        <button>{isEditing ? "Cancel" : "Edit"}</button>
      </div>
      <div>
        {isEditing ? (
          <UserForm user={user} setIsEditing={setIsEditing} />
        ) : (
          <div>
            {isFetching && "Background refetching"}
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.details}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
