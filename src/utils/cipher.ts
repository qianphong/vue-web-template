import UTF8 from 'crypto-js/enc-utf8'
import Base64 from 'crypto-js/enc-base64'
import md5 from 'crypto-js/md5'

export interface EncryptionParams {
  key: string
  iv?: string
}

export function encryptByBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64)
}

export function decodeByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8)
}

export function encryptByMd5(password: string) {
  return md5(password).toString()
}

export function encryptPwd(password: string) {
  return encryptByMd5(`${password}`).toUpperCase()
}
