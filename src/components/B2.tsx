import { useDispatch, useSelector } from "react-redux";
import { randomNumber } from "../store/reducers/b2";

export default function B2() {
  const state: any = useSelector((state) => state);
  //   console.log(state);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>B2</h1>
      <p>ListNumber:[{state.listNumber.join(",")}]</p>
      <button onClick={() => dispatch(randomNumber())}>RandomNumber</button>
    </div>
  );
}
