import { Ul } from "../components/Ul.tsx";
import "../assets/styles/aside.css";

export const Side = () => {
  return (
    <>
      <aside>
        <div className="side-menu">
          <Ul />
        </div>
      </aside>
    </>
  );
};
