import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'

declare global {
  type UserModule = (ctx: {
    app: App<Element>
    router: Router
    routes: RouteRecordRaw[]
  }) => void

  type BasicResponse<T = any> = {
    success: boolean
    code: number
    message: string
    data: T
  }

  type OssFileRes = {
    fileName: string
    ossKey: string
    sort: number
  }
}
