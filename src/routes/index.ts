import {Router} from 'express'

import routerProduct from '../modules/products/routes/routes.product'


const router = Router()

router.user('/product', routerProduct)

export default router
