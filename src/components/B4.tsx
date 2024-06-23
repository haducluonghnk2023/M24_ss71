import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/reducers/b4";
import { RootState } from "@reduxjs/toolkit/query";

export default function B4() {
  const mode: any = useSelector((state: RootState) => state.display.mode);
  console.log(mode);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>B4</h1>
      <button onClick={() => dispatch(toggleMode())}>
        {mode === "list" ? "List Mode" : "Grid Mode"}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: mode === "list" ? "column" : "row",
          gap: "10px",
        }}
      >
        <p
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          1
        </p>
        <p
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          2
        </p>
        <p
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          3
        </p>
        <p
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          4
        </p>
      </div>
    </div>
  );
}
