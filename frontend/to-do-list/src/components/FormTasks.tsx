import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Task from "../interfaces/TaskInterface";
import { useEffect, useState } from "react";
import { UseMutateAsyncFunction } from "@tanstack/react-query";

const FormTask = (props: {
  open: boolean;
  onClose: () => void;
  mutationFn: UseMutateAsyncFunction<
    any,
    Error,
    Omit<Task, "createdAt" | "updatedAt">,
    unknown
  >;
  defaultValues?: Task;
  editing?: boolean;
}) => {
  const [descLength, setDescLength] = useState<number>(
    props.defaultValues?.description?.length || 0
  );

  // Elementos para input de status
  const statusStyles: Record<string, string> = {
    completed: "bg-green-600",
    "in-progress": "bg-yellow-400 text-slate-800",
    pending: "bg-red-600",
  };

  const [statusSelec, setStatusSelec] = useState<string>("pending");

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Omit<Task, "createdAt" | "updatedAt">>({
    defaultValues: {
      title: props.defaultValues?.title || "",
      description: props.defaultValues?.description || "",
      status: props.defaultValues?.status || "pending",
    },
  });

  const onSubmit: SubmitHandler<Omit<Task, "createdAt" | "updatedAt">> = async (
    data
  ) => {
    try {
      await props.mutationFn(data).then(() => {
        setDescLength(props.defaultValues?.description?.length || 0);
        setStatusSelec(props.defaultValues?.status || "pending");
        reset();
        props.onClose();
      });
    } catch (e) {
      console.error(e);
      setError("root", {
        message: `Error al enviar formulario. ${e}`,
      });
    }
  };

  useEffect(() => {
    reset(props.defaultValues);
    setDescLength(props.defaultValues?.description?.length || 0);
    setStatusSelec(props.defaultValues?.status || "pending");
  }, [props.defaultValues, reset]);

  return (
    <Modal
      open={props.open}
      onClose={() => {
        setDescLength(props.defaultValues?.description?.length || 0);
        setStatusSelec(props.defaultValues?.status || "pending");
        reset();
        props.onClose();
      }}
    >
      <form
        className="max-w-3xl w-screen p-4 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        }}
      >
        <h1 className="text-center text-4xl font-mono font-semibold">
          Agregar Tarea
        </h1>
        <div className="grow w-full flex flex-col gap-4 text-xl p-4">
          {props.editing === true ? (
            <input
              className="hidden"
              {...register("id")}
              value={props.defaultValues?.id}
            />
          ) : (
            ""
          )}
          <label className="font-mono text-2xl font-semibold">Titulo:</label>
          <input
            className="w-full bg-slate-700 p-4 rounded-2xl"
            {...register("title", {
              required: "El título es requerido",
              maxLength: {
                value: 20,
                message: "El título no puede tener más de 20 caracteres",
              },
            })}
            type="text"
            placeholder="Título de tu tarea"
          />
          {errors.title && (
            <div className="text-red-300">{errors.title.message}</div>
          )}
          <label className="font-mono text-2xl font-semibold">
            Descripción:
          </label>
          <div className="w-full h-52 flex flex-col bg-slate-700 rounded-2xl">
            <textarea
              className="w-full grow p-4 bg-slate-700 rounded-t-2xl h-full"
              {...register("description", {
                maxLength: {
                  value: 500,
                  message:
                    "La descripción no puede tener más de 500 caracteres",
                },
              })}
              onChange={(input) => setDescLength(input.target.value.length)}
              placeholder="Describe tu tarea"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                }
              }}
            />
            <div
              className={`text-end px-4 pb-4 pt-1 ${
                descLength > 500 ? "text-red-400" : ""
              }`}
            >
              {descLength}/500
            </div>
          </div>

          {errors.description && (
            <div className="text-red-300">{errors.description.message}</div>
          )}
          <label className="font-mono text-2xl font-semibold">Estado:</label>
          <div>
            <div className="flex sm:flex-row not-sm:flex-col gap-4">
              {["pending", "in-progress", "completed"].map((status) => (
                <div
                  key={status}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    {...register("status", {
                      required: "El estado es requerido",
                    })}
                    value={status}
                    className="hidden"
                  />
                  <span
                    className={`px-4 py-2 font-mono brightness-75 text-xl rounded-xl transition-all ${
                      statusStyles[status]
                    } ${
                      statusSelec === status
                        ? "brightness-150 border-2 border-slate-200"
                        : ""
                    }`}
                    onClick={() => setStatusSelec(status)}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {errors.status && (
            <div className="text-red-300">{errors.status.message}</div>
          )}
        </div>
        <div className="flex flex-row gap-4 p-2 w-full">
          <button
            className="p-2 bg-slate-700 rounded-xl grow text-2xl font-mono font-semibold hover:brightness-150 cursor-pointer transition-all"
            disabled={isSubmitting}
            onClick={() => {
              setDescLength(props.defaultValues?.description?.length || 0);
              setStatusSelec(props.defaultValues?.status || "pending");
              reset();
              props.onClose();
            }}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="p-2 bg-green-600 rounded-xl grow text-2xl font-mono font-semibold hover:brightness-150 cursor-pointer transition-all"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subiendo..." : "Confirmar"}
          </button>
        </div>
        {errors.root && (
          <div className="text-red-300">{errors.root.message}</div>
        )}
      </form>
    </Modal>
  );
};

export default FormTask;
