import { clientAxios, serverAxios } from '@/lib/axios'
import { CHANGE_APP_NAME, INIT_LIST } from './constant'

const initList = (data) => ({
  type: INIT_LIST,
  data
})

export const getHomeList = (server) => {
  const axios = server ? serverAxios : clientAxios
  return (dispatch) => {
    return axios.get('/courses').then(res => {
      const data = res.data.data
      dispatch(initList(data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const changeAppName = (data) => ({
  type: CHANGE_APP_NAME,
  data
})