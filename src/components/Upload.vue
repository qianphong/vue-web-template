<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import { deleteFile, uploadFile } from '@/utils/oss'

const files = [
  {
    name: '模板文件',
    url: 'https://xxx.oss-cn-hangzhou.aliyuncs.com/xxx.pdf',
  },
  {
    name: '模板文件2',
    url: 'https://xxx.oss-cn-hangzhou.aliyuncs.com/xxx.pdf',
  },
]
const message = useMessage()
const { fileList } = defineModel<{ fileList: UploadFileInfo[] }>()
function beforeUpload({ file }: { file: UploadFileInfo }) {
  // if (file.file?.type !== 'application/pdf') {
  //   message.error('仅支持上传pdf文件')
  //   return false
  // }
  return true
}
function onRemove({ file }: { file: UploadFileInfo }) {
  if (file.status === 'finished' && file.fullPath) deleteFile(file.fullPath)
  return true
}
</script>

<template>
  <n-steps vertical>
    <n-step title="文件下载">
      <ul>
        <li v-for="(item, index) in files.slice(1)" :key="index">
          <n-a :href="item.url" target="_blank">
            {{ item.name }}
            <span ml-1 align-middle class="i-ant-design:download-outlined" />
          </n-a>
        </li>
      </ul>
    </n-step>
    <n-step title="文件上传">
      <n-upload
        v-model:file-list="fileList"
        multiple
        accept="*"
        directory-dnd
        :custom-request="uploadFile"
        :max="2"
        @remove="onRemove"
        @before-upload="beforeUpload"
      >
        <n-upload-dragger>
          <div mb-2>
            <span text-3xl class="i-ant-design:cloud-upload-outlined" />
          </div>
          <n-text> 点击或者拖动文件到该区域来上传 </n-text>
          <n-p depth="3" flex items-center justify-center>
            <span class="i-ant-design:exclamation-circle-outlined" />
            文件类型限制为pdf，文件数量限制为2个
          </n-p>
        </n-upload-dragger>
      </n-upload>
    </n-step>
  </n-steps>
</template>
