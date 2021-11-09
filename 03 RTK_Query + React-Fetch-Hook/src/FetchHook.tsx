import React from "react";
import useFetch from "react-fetch-hook";

const FetchHook = (): JSX.Element => {
  const {isLoading, data}: Fetch = useFetch("https://jsonplaceholder.typicode.com/albums");
  // console.log("isLoading, data:", isLoading, data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <React.Fragment>
      <h1>Post Fetched by React-Fetch-Hook </h1>
      <div>{data && data.map((album: Album) => <p key={album.id}>{album.title}</p>)}</div>
    </React.Fragment>
  );
};

export default FetchHook;
