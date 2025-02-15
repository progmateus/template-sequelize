import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/sequelize/models/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
}

export { IUsersRepository }