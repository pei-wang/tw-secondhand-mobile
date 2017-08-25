import { reducer as nav } from './Router'
import app from '../modules/app/reducer'
import user from '../modules/user/reducer'
import products from '../modules/product/reducer'
import { orders, owned } from '../modules/product/reducer'
import trade from '../modules/trade/reducer'

export default {
  nav,
  app,
  user,
    trade,
  products,
  orders,
  owned,
}
