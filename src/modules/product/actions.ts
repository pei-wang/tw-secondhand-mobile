import { fetchProduct, postProduct, uploadImage, buyProduct, fetchBought } from '../../apis/productApi'
import { fromPromise } from 'most'
import { select, Epic } from 'redux-most'
import { Product } from '../../definitions'
import * as D from '../../definitions'

export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS'
  }
}

export const fetchBoughtProducts = () => {
  return {
    type: 'FETCH_BOUGHT_PRODUCTS'
  }
}


export const updateProducts = (products: Product[]) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: products,
  }
}

export const uploadImageActionCreator = (file) => {
  return {
    type: 'UPLOAD_IMAGE',
    payload: file,
  }
}

export const createProductActionCreator = (product) => {
  return {
    type: 'POST_PRODUCT',
    payload: product,
  }
}

const fetchProductEpic = (action$, store) => action$.thru(select('FETCH_PRODUCTS'))
  .chain(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(fetchProduct().catch(() => {
        store.dispatch({type: 'UPDATE_LOADER', payload: false})
      }
    ))
  })
  .map((results: D.ProductState) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false})
    return updateProducts(results)
  })

const fetchBoughtProductEpic = (action$, store) => action$.thru(select('FETCH_BOUGHT_PRODUCTS'))
  .chain(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(fetchBought().catch(() => {
        store.dispatch({type: 'UPDATE_LOADER', payload: false})
      }
    ))
  })
  .map((results: D.ProductState) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false})
    return updateProducts(results)
  })



const uploadImageEpic = (action$, store) => action$.thru(select('UPLOAD_IMAGE'))
  .chain((action1$) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(uploadImage(action1$.payload))
  })
  .map((results) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false})
    return {type: 'UPDATE_UPLOAD_IMAGE', payload: results}
  })

const postProductEpic = (action$, store) => action$.thru(select('POST_PRODUCT'))
  .chain((action1$) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(postProduct(action1$.payload))
  }).map(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false})
    store.dispatch({type: 'UPDATE_UPLOAD_IMAGE', payload: ''})
    return {type: 'FETCH_PRODUCTS'}
  })

const buyProductEpic = (action$, store) => action$.thru(select('BUY_PRODUCT'))
  .chain((action1$) => {
    return fromPromise(buyProduct(action1$.payload))
  }).map(() => {
    return {type: 'FETCH_PRODUCTS'}
  })

export const epics: Array<Epic<D.GeneralAction>> = [
  fetchProductEpic,
  uploadImageEpic,
  postProductEpic,
  buyProductEpic,
  fetchBoughtProductEpic,
]
