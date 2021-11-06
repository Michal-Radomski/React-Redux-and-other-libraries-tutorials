import {useDispatch, useSelector} from "react-redux";

// import {decrement, increment, increaseByAmount} from "./redux/slices/counterSlices";
import {decrement, increment, increaseByAmount} from "./redux/slices/counterSlice2";
import "./App.scss";

function App() {
  const dispatch: Dispatch = useDispatch();

  // const counter = useSelector((state) => state && state.counter); //- The same as below
  const counter = useSelector((state: RootState) => state?.counter);
  // console.log("counter:", counter);

  return (
    <div style={{textAlign: "center"}}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{counter?.value}</h2>
      {/* <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseByAmount(0))}>Reset to 0</button> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseByAmount(0))}>Reset to 0</button>
    </div>
  );
}

export default App;
