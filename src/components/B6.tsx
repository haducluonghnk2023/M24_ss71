import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/reducers/b6";

export default function B6() {
  const language = useSelector((state: any) => state.language);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(setLanguage(e.target.value));
  };

  const content: any = {
    en: {
      academy: "rekeiacademy",
    },
    vi: {
      academy: "học viện rekei",
    },
  };
  return (
    <div>
      <h1>B6</h1>
      <label htmlFor="language-select">Select Language: </label>
      <select id="language-select" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <div>
        <p>{content[language].academy}</p>
      </div>
    </div>
  );
}
