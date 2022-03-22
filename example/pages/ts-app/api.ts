import { useFetch } from '@vueuse/core'

interface UserParam {
  userName: string
  authTimestamp: number | Date
}

export interface UserInfo {
  slideshow: Slideshow
}

interface Slideshow {
  author: string
  date: string,
  slides?: SlideItem[]
  title: string
}

interface SlideItem {
  title: string
  type: string
  items?: string[]
}

const CryptoJS = (window as any).CryptoJS || {}
export async function userLogin(param: UserParam) {
  const key = initAes('4e8759c58fdb413dcc2c243eebab91f6', 9);
  const authParms = encrypt(JSON.stringify(param), key)
  const formData = new FormData()
  formData.append('authParms', authParms);
  // const { isFetching, error, data } =  useFetch('/gw/ucsapi/sso/oauth/service/token?grant_type=vistor', {
  //   method: 'POST',
  //   body: formData,
  //   headers: {
  //         Authorization: 'Basic dmlzdG9yOjg5YTkxMDg0ZjhhY2EwYTBmMzczZWIzMzFmZGVjZTQ0'
  //       }
  //    }  
  // )
  const { isFetching, error, data } = await useFetch<UserInfo>('https://httpbin.org/json').get().json<UserInfo>()
  console.log('data----',data.value , isFetching, error);
  return data
}

function initAes(keyStr: string, n: number) {
  if (keyStr.length < n)
    throw new Error('n 过大')
    // 
  return keyStr.substr(n).concat(keyStr.substr(0, n));
  // keyStr.slice(n,keyStr.length).concat(keyStr.slice(0, n));
}

function encrypt (word: string, aesKey: string) {
  const key = CryptoJS.enc.Utf8.parse(aesKey),
  srcs = CryptoJS.enc.Utf8.parse(word),
  encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

