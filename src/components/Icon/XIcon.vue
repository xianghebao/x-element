<template>
  <i
    class="x-icon"
    :class="{
      [`x-icon--${type}`]: type,
    }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="$props" />
  </i>
</template>
<script setup lang="ts">
import {computed} from "vue";
import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Props extends FontAwesomeIconProps {
  type?: "primary" | "success" | "warning" | "danger";
  color?: string;
}
defineOptions({
  name: "XIcon",

  // 注： 当关闭透传属性时，一定要挂载$attrs属性，包含除props和emits之外的值
  inheritAttrs: false, // 关闭掉透传，透传：及父组件传递的属性和事件会到子组件的根标签上
});
const props = defineProps<Props>();

const customStyles = computed(() => {
    return props.color ? {color: props.color} : {};
})
</script>
<style>
</style>
