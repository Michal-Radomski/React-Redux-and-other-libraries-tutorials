import React from "react";
import useFetch from "react-fetch-hook";

const FetchHook = () => {
  const {isLoading, data} = useFetch("https://jsonplaceholder.typicode.com/albums");
  // console.log("isLoading, data:", isLoading, data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <React.Fragment>
      <h1>Post Fetched by React-Fetch-Hook </h1>
      <div>{data && data.map((post) => <p key={post.id}>{post.title}</p>)}</div>
    </React.Fragment>
  );
};

export default FetchHook;
