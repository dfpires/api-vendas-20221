import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";

// cria um tipo de dados para requisição
interface IRequest {
    email: string;
    password: string;
}
// cria um tipo de dados para resposta
interface IResponse {
    user: User;
    token: string;
}
class CreateSessionService {
    public async execute({email, password}: IRequest): Promise<IResponse>{
        // checar se a email e senha são válidos
        const userRepository = getCustomRepository(UserRepository)
        // verifica se o email existe
        const userEmail = await userRepository.findByEmail(email)
        if (!userEmail){
            throw new AppError('Usuário/Senha inválido', 401);
        }
        // verifica se a senha confere
        
    }
}