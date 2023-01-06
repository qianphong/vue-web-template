import axios from 'axios'
import { createDiscreteApi } from 'naive-ui'
import { createRequest } from './axios'
import { checkStatus, replaceUrlParams } from './helper'
import { token } from '@/state'
import { router } from '@/main'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})
const { message } = createDiscreteApi(['message'])

export const useRequest = createRequest(instance, {
  handleError(msg, code) {
    message.error(msg || checkStatus(code) || '请求错误')
    if (code === 401 && router.currentRoute.value.path !== '/') {
      token.value = undefined
      router.replace({ path: '/', query: { login: 1 } })
    }
  },
  beforeRequest(config) {
    if (config.headers) config.headers.Custom = token.value

    config.url = replaceUrlParams(config.url, config.params)
  },
})
