import React from "react";
import "./App.scss";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App(): JSX.Element {
  const [userId, setUserId] = React.useState();
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <div style={{padding: "20px", width: "30%", borderRight: "2px solid purple"}}>
        <Users setUserId={setUserId} />
      </div>
      <div style={{padding: "20px", width: "70%"}}>
        <UserDetails userId={userId} />
      </div>
    </div>
  );
}

export default App;
