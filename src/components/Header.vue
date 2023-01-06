<script lang="ts" setup>
import { logout, token, userInfo } from '@/state'

const options = [
  {
    label: '个人中心',
    key: 'user',
    icon: () => h('span', { class: 'i-ant-design:user' }),
  },
  {
    label: '修改密码',
    key: 'edit',
    icon: () => h('span', { class: 'i-ant-design:edit-twotone' }),
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: () => h('span', { class: 'i-ant-design:logout-outlined' }),
  },
]
const router = useRouter()
function handleSelect(key: string | number) {
  switch (key) {
    case 'user':
      router.push('/user')
      break
    case 'edit':
      console.log('修改密码')
      break
    case 'logout':
      logout()
      break
    default:
      break
  }
}
</script>

<template>
  <header absolute w-full left-0 z-99>
    <div wrapper flex justify-between items-center h-16>
      <div>
        <RouterLink
          v-if="$route.path !== '/'"
          to="/"
          class="font-bold text-lg text-white flex items-center"
        >
          <span mr-2 text-xl class="i-ant-design:arrow-left-outlined" />
          返回
        </RouterLink>
      </div>
      <div>
        <n-dropdown
          v-if="token"
          show-arrow
          trigger="hover"
          placement="bottom-end"
          :options="options"
          @select="handleSelect"
        >
          <div flex items-center p-2 hover:bg-white hover:bg-op-20>
            <n-avatar round size="large" bg-primary>
              <span text-xl class="i-ant-design:user-outlined" />
            </n-avatar>
            <span font-bold text-white ml-2>
              {{ userInfo.user_name }}
              <span align-middle class="i-ant-design:caret-down-filled" />
            </span>
          </div>
        </n-dropdown>
        <Login v-else />
      </div>
    </div>
  </header>
</template>
