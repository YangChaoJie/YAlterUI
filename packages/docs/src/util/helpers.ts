/**
 * 页面滑动到锚点
 * @param id 
 */
export function scrollToTargetAdjusted(id: string) {
     var element = document.getElementById(id);
     const makbody = document.getElementsByClassName('v-application__wrap')[0];
     var headerOffset = 64;
     var elementPosition = element?.getBoundingClientRect().top;
     var offsetPosition = elementPosition! + (makbody as HTMLElement).scrollTop - headerOffset;

     makbody.scrollTo({
          top: offsetPosition,
          behavior: "auto"
     });
}

export const wait = (timeout: number) => {
     return new Promise(resolve => setTimeout(resolve, timeout))
}
