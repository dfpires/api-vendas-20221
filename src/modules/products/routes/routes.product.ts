import {Router} from 'express'
import ProductController from '../controllers/ProductController'

// cria objeto para router
const routerProduct = Router()
// cria objeto controller
const productController = new ProductController()

// define as rotas
routerProduct.get('/', productController.index)
routerProduct.get('/:id', productController.show)
routerProduct.delete('/:id', productController.delete)
routerProduct.post('/', productController.create)
routerProduct.put('/:id', productController.update)

export default routerProduct