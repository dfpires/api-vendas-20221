import {Router} from 'express'
import isAuthenticated from '../../../middleware/isAuthenticated'
import ProductController from '../controllers/ProductController'

// cria objeto para router
const routerProduct = Router()
// cria objeto controller
const productController = new ProductController()

// define as rotas com o middleware que verifica:
// 1. se passou o toke
// 2. se o token é correto
routerProduct.get('/', isAuthenticated, productController.index)
routerProduct.get('/:id', productController.show)
routerProduct.delete('/:id', productController.delete)
routerProduct.post('/', productController.create)
routerProduct.put('/:id', productController.update)

export default routerProduct