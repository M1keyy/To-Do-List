export default interface Task {
  id: string;
  title: string;
  description?: string;
  status: status;
  createdAt: string;
  updatedAt: string;
}

export type status = "pending" | "in-progress" | "completed";
