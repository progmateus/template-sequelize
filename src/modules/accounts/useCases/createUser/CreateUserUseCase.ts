import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { hash } from "bcryptjs";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, password }: ICreateUserDTO) {
    const user = await this.usersRepository.findByEmail(email)

    if (user) {
      throw new AppError("ERR_USER_ALERADY_EXISTS", 409)
    }

    const passwordHash = await hash(password, 8)
    await this.usersRepository.create({
      name,
      email,
      password: passwordHash
    })
  }
}
export { CreateUserUseCase }