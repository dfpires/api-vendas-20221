import {Router} from 'express'

import routerProduct from '../modules/products/routes/routes.product'


const router = Router()

router.use('/product', routerProduct)

export default router
