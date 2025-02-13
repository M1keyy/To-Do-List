export default interface Task {
  id: string;
  title: string;
  description?: string;
  status: status;
  createdAt: Date;
  updatedAt?: Date;
}

export type status = "pending" | "in-progress" | "completed";
