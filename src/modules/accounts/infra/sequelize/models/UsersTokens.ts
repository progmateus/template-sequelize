import { AutoIncrement, BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "./User";

@Table
class UsersTokens extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  refreshToken: string;

  @Column
  expiresDate: Date;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export { UsersTokens };