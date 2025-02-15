import { SubmitHandler, useForm } from "react-hook-form";
import useAddTask from "../hooks/useAddTask";
import Modal from "./Modal";
import Task from "../interfaces/TaskInterface";

const FormTask = (props: {
  onSubmit?: () => void;
  open: boolean;
  onClose?: () => void;
}) => {
  const { mutateAsync: addTaskMutation } = useAddTask({
    title: "TEST DESDE FRONT",
    status: "pending",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga qui quis ipsa quibusdam consectetur impedit natus exercitationem assumenda corrupti. Nisi, numquam quaerat maiores nesciunt corporis autem beatae facere? Rerum, et.",
  });

  type Inputs = Omit<Task, "createdAt" | "updatedAt" | "id">;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (props.onClose) props.onClose();
  };

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <form
        className="min-w-96 p-4 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-3xl font-mono font-semibold">
          Agregar Tarea
        </h1>
        <div className="grow w-full flex flex-col gap-4 text-xl">
          <input
            {...register("title", {
              required: "El título es requerido",
            })}
            type="text"
            placeholder="Título"
          />
          {errors.title && (
            <div className="text-red-300">{errors.title.message}</div>
          )}
          <input
            {...register("description", {
              maxLength: 500,
            })}
            type="text"
            placeholder="Descripción"
          />
          <input
            {...register("status", {
              required: "El estado es requerido",
            })}
            type="text"
            placeholder="Estado"
          />
          {errors.status && (
            <div className="text-red-300">{errors.status.message}</div>
          )}
        </div>
        <div className="flex flex-row gap-4 p-2 w-full">
          <button
            className="p-2 bg-slate-700 rounded-xl grow text-xl font-mono font-semibold hover:brightness-150 cursor-pointer transition-all"
            onClick={props.onClose}
          >
            Cancelar
          </button>
          <button
            className="p-2 bg-green-600 rounded-xl grow text-xl font-mono font-semibold hover:brightness-150 cursor-pointer transition-all"
            type="submit"
          >
            Confirmar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FormTask;
