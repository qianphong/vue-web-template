import OSS from 'ali-oss'
import type { ACLType, MultipartUploadOptions } from 'ali-oss'
import type { UploadCustomRequestOptions } from 'naive-ui'

const BASE_PATH = '/file'
const CHUNK_SIZE = 1024 * 1024 * 50

const client = new OSS({
  region: 'oss-cn-xxxx',
  bucket: 'xxxx',
  accessKeyId: 'xxxxxxxxxxx',
  accessKeySecret: 'xxxxxxxxxxx',
  secure: true,
})

export function uploadFile(
  options: UploadCustomRequestOptions,
  config: { acl: ACLType } = { acl: 'private' },
) {
  const name = `${BASE_PATH}/${options.file.id}-${options.file.name}`

  const uploadOptions: MultipartUploadOptions = {
    progress(p) {
      options.onProgress({ percent: p * 100 })
    },
    headers: {
      'x-oss-object-acl': config.acl,
    },
  }

  const fileSize = options.file.file?.size || 0

  if (fileSize > CHUNK_SIZE) {
    uploadOptions.parallel = Math.ceil(fileSize / CHUNK_SIZE)
    uploadOptions.partSize = CHUNK_SIZE
  }

  client
    .multipartUpload(name, options.file.file, uploadOptions)
    .then(r => {
      options.file.url = getSignatureUrl(r.name)
      options.file.fullPath = r.name
      options.onFinish()
    })
    .catch(e => {
      console.log(e)
      options.onError()
    })
}

export function getSignatureUrl(path: string) {
  if (path && path !== 'null' && path !== 'undefined') {
    if (/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(path)) return path
    else return client.signatureUrl(path)
  } else {
    return path
  }
}

export function deleteFile(path: string) {
  return client.delete(path)
}
