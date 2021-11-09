import React from "react";

import "./App.scss";
import {useGetUsersQuery} from "./users";
import FetchHook from "./FetchHook";

function App() {
  // console.log("useGetUsersQuery:", useGetUsersQuery);
  const {data, error, isLoading, isSuccess, isError} = useGetUsersQuery();
  // console.log("data, error, isLoading, isSuccess, isError:", data, error, isLoading, isSuccess, isError);
  return (
    <React.Fragment>
      <div style={{textAlign: "center"}}>
        <h1>React Redux Toolkit RTK Query</h1>
        {/* //-  BELOW: if isLoading true => "Loading..." */}
        {isLoading && "Loading..."}
        {isError && error.message}
        {isSuccess && data && data.map((user) => <h4 key={user.id}>{user.name}</h4>)}
      </div>
      <hr />
      <div style={{textAlign: "center"}}>
        <FetchHook />
      </div>
    </React.Fragment>
  );
}

export default App;
