import * as D from '../definitions'
import {
  FETCH_PRODUCTS_API,
  POST_PRODUCT_API,
  UPLOAD_IMAGE_API,
  FETCH_BOUGHT_API,
  FETCH_OWNED_API,
  BUY_PRODUCT_API
} from './urls'
import { fetchJson } from './utils'
import { AsyncStorage } from 'react-native'

export const fetchProduct = (): Promise<D.Product[]> => fetchJson(FETCH_PRODUCTS_API, {})

export const uploadImage = (file) => {
  let formData = new FormData()
  formData.append('img', file)
  return fetchJson(UPLOAD_IMAGE_API, {
    method: 'POST',
    body: formData,
  })
}

export const postProduct = (createProduct: D.Product) => {
  return fetchJson(POST_PRODUCT_API, {
      method: 'POST',
      body: JSON.stringify(createProduct),
    }
  )
}

export const buyProduct = (productId: string) => {
  return fetchJson(BUY_PRODUCT_API + productId, {
    method: 'PUT',
  })
}

export const fetchBought = async (): Promise<D.Product[]> => {
  return fetchJson(FETCH_BOUGHT_API, {
      method: 'GET',
      headers: {
        'sessionToken': await AsyncStorage.getItem('sessionToken')
      }
    }
  )
}

export const fetchOwned = async (): Promise<D.Product[]> => {
  return fetchJson(FETCH_OWNED_API, {
      method: 'GET',
      headers: {
        'sessionToken': await AsyncStorage.getItem('sessionToken')
      }
    }
  )
}
