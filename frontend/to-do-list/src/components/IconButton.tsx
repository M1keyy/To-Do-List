import { ReactNode } from "react";

const IconButton = (props: { icon?: ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:scale-110 hover:brightness-150 bg-slate-700 transition-all cursor-pointer p-3 rounded-4xl"
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
