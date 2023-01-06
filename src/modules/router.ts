import { createDiscreteApi } from 'naive-ui'
import { token } from '@/state'

const { loadingBar } = createDiscreteApi(['loadingBar'], {
  loadingBarProviderProps: {
    themeOverrides: { colorLoading: 'var(--primary-color)' },
  },
})
const whiteList = ['/']
const appTitle = import.meta.env.VITE_APP_TITLE || '项目模板'
function getPageTitle(title?: string) {
  return title ? `${title}-${appTitle}` : appTitle
}

export const install: UserModule = ({ router }) => {
  router.beforeEach(to => {
    document.title = getPageTitle(to.meta.title)
    if (!token.value && !whiteList.includes(to.path)) return { path: '/' }
    loadingBar.start()
  })
  router.afterEach(() => {
    loadingBar.finish()
  })
}
