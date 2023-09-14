import { HomeRepository } from "../../../infraestructure/repositories/home/HomeRepository";

export default class HomeUseCase {
  
    _repository = new HomeRepository();

    async checkUserID(obj){
        try {
            const response = await this._repository.checkUserID(obj)

            if (response instanceof Error) throw response;

            return response;
        } catch (error) {
            throw error;
        }
    }

}