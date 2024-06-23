import { useDispatch, useSelector } from "react-redux";
import "./b3.css";
import { toggleTheme } from "../store/reducers/b3";
export default function B3() {
  const state: any = useSelector((state) => state);
  //   console.log(state);
  //   console.log(state.theme.theme);

  const dispatch = useDispatch();
  return (
    <div className={`${state.theme.theme}`}>
      <h1>B3</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
}
