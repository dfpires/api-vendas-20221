import {Router} from 'express'

import routerProduct from '../modules/products/routes/routes.product'
import userRouter from '../modules/users/routes/routes.user'


const router = Router()

router.use('/product', routerProduct)
router.use('/user', userRouter)

export default router
