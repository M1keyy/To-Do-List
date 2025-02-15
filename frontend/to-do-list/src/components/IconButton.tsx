import { ReactNode } from "react";

const IconButton = (props: { icon?: ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:scale-110 hover:brightness-150 active:brightness-200 active:scale-125 bg-slate-700 transition-all cursor-pointer p-3 rounded-full flex items-center justify-center"
    >
      <div className="size-full">{props.icon}</div>
    </button>
  );
};

export default IconButton;
