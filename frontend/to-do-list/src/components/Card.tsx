import Task from "../interfaces/TaskInterface";
import IconButton from "./IconButton";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import useDeleteTask from "../hooks/useDeleteTask";

const Card = (props: Task) => {

  const { mutateAsync: deleteTaskMutation } = useDeleteTask(props.id);

  const statusStyles: Record<string, string> = {
    completed: "bg-green-600",
    "in-progress": "bg-yellow-400 text-slate-800",
    pending: "bg-red-600",
  };

  return (
    <div className="rounded-xl bg-slate-800 shadow shadow-gray-800 p-8 w-full">
      <div className="flex flex-col gap-3 text-center">
        <div className="flex flex-row gap-3 justify-end">
          <IconButton icon={<FaEdit />} />
          <IconButton icon={<AiFillDelete onClick={() => deleteTaskMutation()} />} />
        </div>
        <h1 className="font-mono text-2xl font-bold">{props.title}</h1>
        <div className="font-mono text-justify bg-slate-700 rounded-xl max-h-36 min-h-24">
          <div className="m-6 line-clamp-4">
            <b className="underline">Descripción:</b>{" "}
            {props.description ?? "No hay descripción."}
          </div>
        </div>
        <div
          className={`font-mono font-semibold w-fit p-2 rounded-xl cursor-pointer hover:scale-110 transition-all ${
            statusStyles[props.status]
          }`}
        >
          {props.status}
        </div>
        <div className="text-end font-semibold">
          <div>
            <u>Creado:</u> {String(props.createdAt)}
          </div>
          <div>
            <u>Última actualización:</u> {String(props.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
