import { template } from 'lodash-es'

export function replaceUrlParams(url?: string, params?: Record<string, any>) {
  if (!url) return ''

  if (!params) return url

  const compiled = template(url)
  return compiled(params)
}

export function checkStatus(status?: number) {
  let message = ''
  switch (status) {
    case 400:
      break

    case 401:
      message = '用户没有权限（令牌、用户名、密码错误）!'
      break

    case 403:
      message = '用户得到授权，但是访问是被禁止的!'
      break

    case 404:
      message = '网络请求错误，未找到该资源!'
      break

    case 405:
      message = '网络请求错误,请求方法未允许!'
      break

    case 408:
      message = '网络请求超时!'
      break

    case 500:
      message = '服务器错误,请联系管理员!'
      break

    case 501:
      message = '服务未实现'
      break

    case 502:
      message = '网络错误!'
      break

    case 503:
      message = '服务不可用，服务器暂时过载或维护!'
      break

    case 504:
      message = '网络超时!'
      break

    case 505:
      message = '版本不支持该请求!'
      break

    default:
  }
  return message
}
