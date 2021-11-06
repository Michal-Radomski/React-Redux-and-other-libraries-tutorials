import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "./redux/createAsyncThunk";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const post = useSelector((state) => state.post);
  // console.log("post:", post);
  const {postList, loading} = post;

  // console.log("postList:", postList);
  // console.log("loading:", loading);
  return (
    <div style={{textAlign: "center"}}>
      <h1>Post List</h1>
      <hr />
      <hr />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        postList?.map((post) => (
          <React.Fragment key={post.id}>
            <h2>{post?.title}</h2>
            <h2>{post?.body}</h2>
            <hr />
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default App;
