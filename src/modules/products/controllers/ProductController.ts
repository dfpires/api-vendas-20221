import {Request, Response} from 'express'
import CreateProductService from '../services/CreateProductService'
class ProductController {
    // não trataremos de regra de negócio por aqui
    public async create(request: Request, response: Response):Promise<Response>{
        // obter os dados do produto
        let {name, quantity, price} = request.body
        const objeto = new CreateProductService();
        const newProduct = await objeto.execute({ name, quantity, price })
        return response.json(newProduct)
    }
    public async delete(request: Request, response: Response):Promise<Response>{

    }
    public async index(request: Request, response: Response):Promise<Response>{

    }
    public async show(request: Request, response: Response):Promise<Response>{

    }
    public async update(request: Request, response: Response):Promise<Response>{

    }






}
export default ProductController