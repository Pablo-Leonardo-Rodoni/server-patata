import { ReactNode, MouseEventHandler } from "react";
import "../assets/styles/aside.css";

export const Button = ({
  value,
  className,
  eventHandler,
  children,
}: {
  value?: string;
  className: string;
  eventHandler?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}) => {
  return (
    <>
      <button onClick={eventHandler} type="button" className={className}>
        {children}
        {value}
      </button>
    </>
  );
};
