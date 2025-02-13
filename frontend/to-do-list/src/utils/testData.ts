import Task from "../interfaces/TaskInterface";

const tasks: Task[] = [
  {
    id: "0",
    title: "Task 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut, dolorum voluptatibus placeat corporis illum ducimus, aliquid fuga suscipit provident laudantium minus soluta consectetur, corrupti deserunt earum nostrum. Amet, autem?",
    status: "pending",
    createdAt: new Date(2024, 7, 2),
  },
  {
    id: "1",
    title: "Task 2",
    status: "pending",
    createdAt: new Date(2024, 11, 12),
    updatedAt: new Date(2025, 0, 12),
  },
  {
    id: "2",
    title: "Task 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut, dolorum voluptatibus placeat corporis illum ducimus, aliquid fuga suscipit provident laudantium minus soluta consectetur, corrupti deserunt earum nostrum. Amet, autem?",
    status: "in-progress",
    createdAt: new Date(2024, 7, 13),
  },
  {
    id: "3",
    title: "Task 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut, dolorum voluptatibus placeat corporis illum ducimus, aliquid fuga suscipit provident laudantium minus soluta consectetur, corrupti deserunt earum nostrum. Amet, autem?",
    status: "completed",
    createdAt: new Date(2024, 8, 12),
  },
];

export default tasks;
