import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../store/reducers/b1";

export default function B1() {
  const state: any = useSelector((state) => state);
  //   console.log(state);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B1</h1>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
