import { isObject } from './common'
import { deepClone } from './deep-clone'
/**
 * 将两个对象进行深度的动态合并
 *
 * @param sourceObj 用于接收合并的源对象
 * @param targetObj 被合并的对象，当属性名相同但值类型不同的情况，此对象的权重更高
 * @param isNewObj 标记合并至一个全新的对象（深度的）
 */
 export function mergeObjects<T extends Record<string, any>, U extends Record<string, any>>(
  sourceObj: T,
  targetObj: U,
  isNewObj = true
) {
  sourceObj = isNewObj ? deepClone(sourceObj) : sourceObj

  const loop: Array<{
    source: Record<string, any>,
    target: Record<string, any>
  }> = [
    {
      source: sourceObj,
      target: targetObj
    }
  ]

  while (loop.length) {
    const { source, target } = loop.pop()!

    Object.keys(target).forEach(key => {
      if (isObject(target[key])) {
        if (!isObject(source[key])) {
          source[key] = {}
        }

        loop.push({
          source: source[key],
          target: target[key]
        })
      } else if (Array.isArray(target[key])) {
        if (!Array.isArray(source[key])) {
          source[key] = []
        }

        loop.push({
          source: source[key],
          target: target[key]
        })
      } else {
        source[key] = target[key]
      }
    })
  }

  return sourceObj as T & U
}
