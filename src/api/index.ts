import { useRequest } from '@/utils/request'

export interface LoginParams {
  username: string
  password: string
}

export interface LoginRes {
  userId: number
  category: number
  username: string
  token: string
}
export function useLogin() {
  return useRequest<LoginRes>(
    '/login',
    {
      method: 'post',
    },
    { immediate: false },
  )
}

export function changePwd() {
  return useRequest(
    '/user/modify-password',
    {
      method: 'post',
    },
    { immediate: false },
  )
}
