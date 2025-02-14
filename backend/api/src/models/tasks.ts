import { Table, Column, Model, DataType } from "sequelize-typescript";

export enum status {
  pending = "pending",
  in_progress = "in-progress",
  completed = "completed",
}

@Table({ tableName: "Task", timestamps: true })
export class Task extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0, 20],
    },
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      len: [0, 500],
    },
  })
  description?: string;

  @Column({
    type: DataType.ENUM(...Object.values(status)),
    allowNull: false,
    defaultValue: status.pending,
    validate: {
      isIn: [[status.completed, status.in_progress, status.pending]],
    },
  })
  status!: status;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    validate: { isDate: true },
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    validate: { isDate: true },
  })
  updatedAt!: Date;
}
