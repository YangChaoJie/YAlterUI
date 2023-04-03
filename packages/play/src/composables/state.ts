import { ref, shallowRef } from "vue"
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
