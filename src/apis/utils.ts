import { AsyncStorage } from 'react-native'

export const fetchJson = async (url, option) => {

  console.log(JSON.stringify(option))
  return fetch(url, {
    ...option,
    headers: {
      ...option.headers,
      'Content-Type': 'application/json',
      'sessionToken': await AsyncStorage.getItem('sessionToken')
    },
  })
    .then(response => {
      if (response.status < 400) {
        return response.json()
      }
      console.log(response)
      return response.json()
    })
}