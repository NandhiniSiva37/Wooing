import { RootState } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setCounter,
  incrementByAmount,
} from "../store/reducers/counterSlice";


function Counter() {
  const counter: number = useSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>
          Counter Value : <b>{counter}</b>
        </p>
        <br />
        <div>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Add 1
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Subtract 1
          </button>
          <button
            onClick={() => {
              dispatch(incrementByAmount(10));
            }}
          >
            Add 10
          </button>
          <button
            onClick={() => {
              dispatch(incrementByAmount(-10));
            }}
          >
            Subtract 10
          </button>
        </div>
        <br />
        <div>
          <p>Or set it here</p>
          <input
            value={counter}
            onChange={(ev) => {
              const newValue = ev.target.value;
              dispatch(setCounter(parseFloat(newValue)));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Counter;