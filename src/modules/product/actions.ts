import { fetchProduct, postProduct, uploadImage, buyProduct, fetchBought, fetchOwned } from '../../apis/productApi'
import { fromPromise } from 'most'
import { select, Epic } from 'redux-most'
import { Product } from '../../definitions'
import * as D from '../../definitions'

export const buyProducts = (productId:string) => {
  return {
    type: 'BUY_PRODUCT',
    payload: productId,
  }
}

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

export const fetchOwnedProducts = () => {
  return {
    type: 'FETCH_OWNED_PRODUCTS'
  }
}

export const updateProducts = (products: Product[]) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: products,
  }
}

export const updateBought = (products: Product[]) => {
  return {
    type: 'UPDATE_BOUGHT',
    payload: products,
  }
}

export const updateOwned = (products: Product[]) => {
  return {
    type: 'UPDATE_OWNED',
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
    return updateBought(results)
  })

  const fetchOwnedProductEpic = (action$, store) => action$.thru(select('FETCH_OWNED_PRODUCTS'))
  .chain(() => {
    store.dispatch({type: 'UPDATE_LOADER', payload: true})
    return fromPromise(fetchOwned().catch(() => {
        store.dispatch({type: 'UPDATE_LOADER', payload: false})
      }
    ))
  })
  .map((results: D.ProductState) => {
    store.dispatch({type: 'UPDATE_LOADER', payload: false})
    return updateOwned(results)
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
  fetchOwnedProductEpic,
]
