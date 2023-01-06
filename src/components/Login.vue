<script lang="ts" setup>
import type { FormInst, FormItemRule } from 'naive-ui'
import { token, userInfo } from '@/state'
import { type LoginParams, useLogin } from '@/api'
import { encryptPwd } from '@/utils/cipher'

const showLogin = ref(false)
const formRef = ref<FormInst>()
const formData = ref<LoginParams>({
  username: '', // 123456
  password: '', // 345678
})
const rules: Record<string, FormItemRule[]> = {
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入账号',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入密码',
    },
  ],
}
const [loginRes, loading, login] = useLogin()

async function handleSubmit() {
  await formRef.value?.validate()
  await login({
    data: {
      uscc: formData.value.username,
      password: encryptPwd(formData.value.password),
    },
  })
  token.value = loginRes.value?.token
  userInfo.value = loginRes.value
  showLogin.value = false
}

function resetForm() {
  formRef.value?.restoreValidation()
  formData.value = {
    username: '',
    password: '',
  }
}
</script>

<template>
  <div>
    <n-button type="primary" strong @click="showLogin = true">Login</n-button>
    <NModal
      v-model:show="showLogin"
      :auto-focus="false"
      @after-leave="resetForm"
    >
      <div bg-white rounded-lg overflow-hidden>
        <div
          class="i-ant-design:close"
          absolute
          right-5
          text-xl
          text-white
          cursor-pointer
          top-5
          @click="showLogin = false"
        />
        <div bg-primary py-5 text-center text-white text-lg font-bold>
          登 录
        </div>
        <div p-10 w-80 lg:w-100>
          <NForm
            ref="formRef"
            :model="formData"
            :rules="rules"
            require-mark-placement="left"
          >
            <NFormItem label="账号" path="username">
              <NInput
                v-model:value="formData.username"
                clearable
                maxlength="18"
                placeholder="请填写账号"
              />
            </NFormItem>
            <NFormItem label="密码" path="password">
              <NInput
                v-model:value="formData.password"
                type="password"
                clearable
                show-password-on="click"
                placeholder="请填写密码"
              />
            </NFormItem>
          </NForm>
          <div w-50 mx-a>
            <NButton
              type="primary"
              round
              block
              size="large"
              :loading="loading"
              @click="handleSubmit"
            >
              立 即 登 录
            </NButton>
          </div>
        </div>
      </div>
    </NModal>
  </div>
</template>
