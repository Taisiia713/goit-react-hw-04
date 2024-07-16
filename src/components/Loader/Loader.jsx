import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <Oval color="#00BFFF" height={80} width={80} />;
    </div>
  );
}
