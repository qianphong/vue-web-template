import { isFunction } from '@vueuse/core'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { type UseAxiosOptions, useAxios } from '@vueuse/integrations/useAxios'

export function createRequest(
  instance: AxiosInstance,
  options?: {
    handleError?: (errorMsg?: string, code?: number) => void
    beforeRequest?: (config: AxiosRequestConfig) => void
  },
) {
  // 请求拦截
  instance.interceptors.request.use(config => {
    options?.beforeRequest?.(config)
    return config
  })
  // 相应拦截
  instance.interceptors.response.use(
    response => {
      const data: BasicResponse | null = response.data
      if (data?.success) {
        return Promise.resolve(response)
      } else {
        options?.handleError?.(data?.message)
        return Promise.reject(response)
      }
    },
    error => {
      const { response, message } = error || {}
      let errMessage: string = response?.data?.message || ''
      const code = response?.status
      if (!errMessage) {
        try {
          if (code === 'ECONNABORTED' && message.includes('timeout'))
            errMessage = '接口请求超时,请刷新页面重试!'

          const err: string = error?.toString?.() ?? ''
          if (err?.includes('Network Error'))
            errMessage = '网络异常，请检查您的网络连接是否正常!'
        } catch (error) {
          throw new Error(error as unknown as string)
        }
      }
      options?.handleError?.(errMessage, code)
      return Promise.reject(error)
    },
  )

  return function useRequest<T = any>(
    url: string,
    axiosConfig: AxiosRequestConfig | (() => AxiosRequestConfig),
    options: UseAxiosOptions = { immediate: true },
  ) {
    const { data, isLoading, execute, ...other } = useAxios<BasicResponse<T>>(
      url,
      isFunction(axiosConfig) ? axiosConfig() : axiosConfig,
      instance,
      options,
    )
    const ret = computed(() => {
      return data.value?.data
    })
    function send(...args: Parameters<typeof execute>) {
      return new Promise<BasicResponse<T> | undefined>((resolve, reject) => {
        execute(...args).then(ret => {
          if (ret.error.value) reject(ret.error.value)
          else resolve(ret.data.value)
        }, reject)
      })
    }
    return [ret, isLoading, send, other] as const
  }
}
