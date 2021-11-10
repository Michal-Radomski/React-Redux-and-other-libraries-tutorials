import React from "react";
import {useMutation, useQueryClient} from "react-query";

import * as api from "./usersApi";

const UserForm = ({user, setIsEditing}: {user: User; setIsEditing: boolean | any}): JSX.Element => {
  const [fields, setFields] = React.useState({...user});
  // console.log("user:", user);
  // console.log("setIsEditing:", setIsEditing);
  const queryClient = useQueryClient();

  const {isLoading, mutate} = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], user.id, data);
      // console.log("data:", data)
      // Trigger the old data to be updated
      // queryClient.invalidateQueries(["user"], user.id);
      setIsEditing(false);
    },
  });

  const handleChange = (event: {target: {name: string; value: string}}) => {
    const {name, value} = event.target;
    // console.log("name, value:", name, value);
    setFields({...fields, [name]: value});
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // console.log("fields:", fields);
    mutate(fields);
  };

  if (isLoading) {
    return <div>Saving your changes...</div>;
  }

  return (
    <div style={{paddingTop: "20px"}}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            style={{width: "100%", marginBottom: "20px"}}
          />
        </label>
        <label>
          Details:{" "}
          <textarea
            name="details"
            value={fields.details}
            onChange={handleChange}
            style={{width: "100%", marginBottom: "20px", height: "100px"}}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
