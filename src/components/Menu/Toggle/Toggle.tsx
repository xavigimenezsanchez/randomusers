import { useState } from "react";
import { useResize } from "../../../hooks";
import "./toggle.scss";

interface IToggle {
  callback(open: boolean): any;
}
export const Toggle = ({ callback }: IToggle) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    const newStatus = !open;
    callback(newStatus);
    setOpen(newStatus);
  };
  useResize(() => setOpen(false));
  return (
    <div className="toggle" onClick={handleToggle}>
      <div className={`toggle__icon${open ? " open" : ""}`}>
        <div className="toggle__icon__line"></div>
        <div className="toggle__icon__line"></div>
        <div className="toggle__icon__line"></div>
      </div>
    </div>
  );
};
