import { ref, shallowRef } from "vue"
import { RouteRecordRaw, RouterOptions } from "vue-router"
// import { input, isSearching, searchResult, selectIndex, userConfigLoading } from '~/composables/state'
const initParams = new URLSearchParams(location.search)
export const input = ref(initParams.get('compontent')?.toString() || '')
export const selectIndex = ref(0)
export const isSearching = ref(false)
export const searchResult = shallowRef<any[]>([])
export const userConfigLoading = ref(false)
export const isModalOpen = ref(true)
export const currentTab = ref<'search' | 'config'>('search')
export const isCompact = ref(false)

export type RouteRecordSearchRaw = RouteRecordRaw & {
  searchName: string
  [key: string]: any
}
/// 模糊匹配 router
export function macthRouterOptions(options: RouterOptions, keyWord: string) {
  const aa = options.routes as RouteRecordSearchRaw[]
  const ary = selectMatchItem<RouteRecordSearchRaw>(aa, keyWord)
  let bb = [...new Set(ary)];
  const components = bb.map(item => {
    item.searchName = toKebabCase(item!.name as string || '').split('-')[0];
    return item
  })
  const singles = removeDuplicate(components, 'searchName')
  console.log('singles---', singles, components, ary);
  return selectMatchItem<RouteRecordSearchRaw>(singles, keyWord);
}
/// 需要全局缓存 一个 选中搜索的 组件/button --- 查到button下的example  动态读取 并展示
/**
* @param {Object} lists
* @param {Object} keyWord
*/
function selectMatchItem<T extends RouteRecordSearchRaw>(lists: T[], keyWord: string, property: string = 'searchName') {
  let reg = new RegExp(keyWord);
  let resArr: T[] = [];
  lists.filter(item => {
    const test = Object.keys(item!).find(m => {
      const mm = m || ''
      return mm === property
    }) || '' as string
    if (reg.test(item[test])) {
      resArr.push(item);
    }
  })
  return resArr;
}

function toKebabCase(value: string) {
  if (allCapital(value)) {
    return value.toLocaleLowerCase()
  }

  return (
    value.charAt(0).toLowerCase() +
    value
      .slice(1)
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
  )
}

function allCapital(value: string) {
  const matched = value.match(/[A-Z]+/)
  return matched && matched[0] === value
}

function removeDuplicate(arr: any[], key: string) {
  const uniqueIds: any[] = [];
  const unique = arr.filter(element => {
    const isDuplicate = uniqueIds.includes(element[key]);

    if (!isDuplicate) {
      uniqueIds.push(element[key]);
      return true;
    }
    return false;
  });
  return unique;
}
