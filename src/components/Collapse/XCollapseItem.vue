<template>
  <div
    class="x-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="x-collapse-item__header"
      :class="{
        'is-active': isActive,
        'is-disabled': disabled,
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="header"> {{ title }}</slot>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="x-collapse-item__wrap" v-show="isActive">
        <div class="x-collapse-item__content" :id="`item-content-${name}`">content</div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import type { CollapseItemProps } from "./types";
import { inject, computed } from "vue";
import { CollapseContextKey } from "./types";
defineOptions({
  name: "XCollapseItem",
});
const props = defineProps<CollapseItemProps>();
const collaspeContext = inject(CollapseContextKey);
const isActive = computed(() => {
  return collaspeContext?.activeNames?.value.includes(props.name);
});
const handleClick = () => {
  if (props.disabled) {
    return;
  }
  collaspeContext?.handleItemClick?.(props.name);
};

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el: HTMLElement) {
    el.style.height = "0px";
    el.style.overflow = 'hidden';
  },
  enter(el: HTMLElement) {
    el.style.height = el.scrollHeight + "px";
  },
  afterEnter(el: HTMLElement) {
    el.style.height = "";
    el.style.overflow = '';
  },
  beforeLeave(el: HTMLElement) {
    el.style.height = el.scrollHeight + "px";
    el.style.overflow = 'hidden';
  },
  leave(el: HTMLElement) {
    el.style.height = "0";
  },
  afterLeave(el: HTMLElement) {
    el.style.height = "";
    el.style.overflow = '';
  },
};
</script>
<style></style>
