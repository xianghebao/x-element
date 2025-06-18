<template>
  <div class="x-collapse">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, provide,watch } from "vue";
import type { NameType, CollapseProps, CollapseEmits } from "./types";
import { CollapseContextKey } from "./types";
defineOptions({
  name: "XCollapse",
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref<NameType[]>(props.modelValue || []);
if (props.accordion && activeNames.value.length > 1) {
  console.warn("手风琴模式下，只能同时展开一个面板");
}

// 这个主要是解决 异步初始赋值，数据变化，视图不变化的问题
// 本地数据突然改变 当ref的值传入props的值可能会出现这种情况，记得使用watch
watch(()=>props.modelValue, () => {
    activeNames.value = props.modelValue;
})
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? "" : item];
  } else {
    const index = activeNames.value.indexOf(item);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(item);
    }
  }

  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
};
provide(CollapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>
<style></style>
