<template>
  <button
    ref="_ref"
    class="x-button"
    :class="{
      [`x-button--${type}`]: type,
      [`x-button--${size}`]: size,
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({ name: "XButton" });

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const _ref = ref<HTMLButtonElement>();
defineExpose({
  ref: _ref,
});
</script>
