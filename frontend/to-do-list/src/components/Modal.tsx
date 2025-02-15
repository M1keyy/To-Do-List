import { ReactNode } from "react";
import { IoIosClose } from "react-icons/io";

const Modal = (props: {
  children?: ReactNode;
  onClose?: () => void;
  open?: boolean;
}) => {
  return (
    <div
      onClick={props.onClose}
      className={`fixed flex inset-0 justify-center items-center transition-colors ${
        props.open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-slate-800 rounded-xl p-6 shadow transition-all ${
          props.open ? "scale-75 opacity-100" : "scale-100 opacity-0"
        }`}
      >
        <button
          className="absolute top-2 right-2 rounded-xl text-slate-200 bg-slate-800 hover:brightness-150 cursor-pointer transition-all"
          onClick={props.onClose}
        >
          <IoIosClose size={40}/>
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
