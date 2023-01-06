import { useRequest } from '@/utils/request'

export interface LoginParams {
  uscc: string
  password: string
}

export interface LoginRes {
  user_id: number
  category: number
  user_name: string
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
    '/user/modify-password/enterprise',
    {
      method: 'post',
    },
    { immediate: false },
  )
}
