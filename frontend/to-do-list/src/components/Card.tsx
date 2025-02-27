import Task, { status } from "../interfaces/TaskInterface";
import IconButton from "./IconButton";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import useDeleteTask from "../hooks/useDeleteTask";
import { useState } from "react";
import Modal from "./Modal";
import FormTask from "./FormTasks";
import useEditTask from "../hooks/useEditTask";
import formatDate from "../utils/formatDate";

const Card = (props: Task) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const { mutateAsync: deleteTaskMutation } = useDeleteTask();
  const { mutateAsync: editTaskMutation } = useEditTask();

  const statusStyles: Record<string, string> = {
    completed: "bg-green-600",
    "in-progress": "bg-yellow-400 text-slate-800",
    pending: "bg-red-600",
  };

  const statusNames: Record<status, string> = {
    completed: "Completado",
    "in-progress": "En progreso",
    pending: "Pendiente",
  }

  return (
    <div className="rounded-xl bg-slate-800 shadow shadow-gray-800 p-8 w-full">
      <div className="flex flex-col gap-3 text-center">
        <div className="flex flex-row gap-3 justify-end">
          <IconButton icon={<FaEdit />} onClick={() => setOpenEdit(true)} />
          <IconButton
            icon={<AiFillDelete />}
            onClick={() => setOpenDelete(true)}
          />
        </div>
        <h1 className="font-mono text-2xl font-bold">{props.title}</h1>
        <div className="font-mono text-left bg-slate-700 rounded-xl max-h-fit min-h-24">
          <div className="m-6 line-clamp-24 whitespace-pre-line">
            <b className="underline">Descripción:</b>
            <br />
            {props.description === "" || undefined || null
              ? "No hay descripción."
              : props.description}
          </div>
        </div>
        <div
          className={`font-mono font-semibold w-fit p-2 rounded-xl cursor-pointer hover:scale-110 transition-all ${
            statusStyles[props.status]
          }`}
        >
          {statusNames[props.status]}
        </div>
        <div className="text-end font-semibold">
          <div>
            <u>Creado:</u> {formatDate(props.createdAt)}
          </div>
          <div>
            <u>Última actualización:</u> {formatDate(props.updatedAt)}
          </div>
        </div>
      </div>
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <div className="h-64 justify-center items-center flex flex-col">
          <div className="text-3xl font-mono grow items-center flex text-center px-12">
            ¿Quieres eliminar la tarea?
          </div>
          <div className="flex flex-row gap-4 p-2 w-full">
            <button
              className="p-2 bg-slate-700 rounded-xl grow text-2xl font-mono font-semibold hover:brightness-150 cursor-pointer transition-all"
              onClick={() => setOpenDelete(false)}
            >
              Cancelar
            </button>
            <button
              className="p-2 bg-red-600 rounded-xl grow text-2xl font-mono font-semibold hover:brightness-150 cursor-pointer transition-all"
              onClick={() => deleteTaskMutation(props.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </Modal>
      <FormTask
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        mutationFn={editTaskMutation}
        defaultValues={props}
        editing
      />
    </div>
  );
};

export default Card;
