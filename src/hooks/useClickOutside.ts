import type { Ref } from "vue";
import { onMounted, onUnmounted } from "vue";
// 这个hooks 主要是处理，点击元素外部，触发回调函数，用于点击外部关闭某些东西用
export default function useClickOutside(
  el: Ref<HTMLElement | undefined>,
  callback: (e: MouseEvent) => void
) {
  const handleClick = (e: MouseEvent) => {
    if (el.value && e.target) {
      if (!el.value.contains(e.target as HTMLElement)) {
        callback(e);
      }
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClick);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClick);
  });
}
