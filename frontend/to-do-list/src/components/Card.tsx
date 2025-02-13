import Task from "../interfaces/TaskInterface";
import IconButton from "./IconButton";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Card = (props: Task) => {
  const statusStyles: Record<string, string> = {
    completed: "bg-green-600",
    "in-progress": "bg-yellow-400 text-slate-800",
    pending: "bg-red-600",
  };

  return (
    <div className="rounded-xl bg-slate-800 shadow shadow-gray-800 p-8">
      <div className="flex flex-col gap-3 text-center">
        <div className="flex flex-row gap-3 justify-end">
          <IconButton icon={<FaEdit />} />
          <IconButton icon={<AiFillDelete />} />
        </div>
        <h1 className="font-mono text-2xl font-bold">{props.title}</h1>
        <p className="font-mono text-justify p-5 line-clamp-5 h-35 bg-slate-700 rounded-xl">
          <b className="underline">Descripción:</b> {props.description}
        </p>
        <div
          className={`font-mono font-semibold w-fit p-2 rounded-xl cursor-pointer hover:scale-110 transition-all ${
            statusStyles[props.status]
          }`}
        >
          {props.status}
        </div>
        <div className="text-end font-semibold">
          <div>
            <u>Creado:</u> {props.createdAt.getDate()}/
            {props.createdAt.getMonth()}/{props.createdAt.getFullYear()}
          </div>
          {props.updatedAt ? (
            <div>
              <u>Última actualización:</u> {props.updatedAt.getDate()}/
              {props.updatedAt.getMonth()}/{props.updatedAt.getFullYear()}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
