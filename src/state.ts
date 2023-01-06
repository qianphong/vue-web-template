import type { LoginRes } from '@/api'
import { TOKEN_KEY, USER_INFO_KEY } from '@/utils/const'
import { router } from '@/main'

export const token = useLocalStorage(TOKEN_KEY, '')
export const userInfo = useLocalStorage<LoginRes | Record<string, any>>(
  USER_INFO_KEY,
  {},
)

export function logout() {
  token.value = ''
  userInfo.value = {}
  if (router.currentRoute.value.fullPath !== '/') router.replace('/')
}
