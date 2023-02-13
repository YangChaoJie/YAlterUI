import type { ComputedRef } from 'vue';
import type { MaybeRef } from '@vueuse/core';
export declare const useProp: <T>(name: string) => ComputedRef<T>;
export declare const useDisabled: (fallback?: MaybeRef<boolean | undefined>) => ComputedRef<boolean>;
