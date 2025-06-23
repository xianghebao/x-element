<template>
  <Transition name="fade"
    @enter="updateHeight"
    @after-leave="destroyComponents"
  >
    <div
      class="x-message"
      v-show="visible"
      :class="{
        [`x-message--${type}`]: type,
        'is-closable': showClose,
      }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="x-message__content">
        <slot>
          <RenderVnode :v-node="message" v-if="message"></RenderVnode>
        </slot>
      </div>
      <div class="x-message__close" v-if="showClose">
        <Icon icon="xmark" @click="visible = false"></Icon>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch, nextTick } from "vue";
import type { MessageProps } from "./types";
import Icon from "../Icon/XIcon.vue";
import RenderVnode from "../Dropdown/RenderVnode";
import { getLastBottomOffset, getLastInstance } from "./method";
import useEventListener from  "@/hooks/useEventListener";
const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000,
  showClose: false,
  offset: 20,
});
const visible = ref(false);

const messageRef = ref<HTMLElement>();
// 计算div的高度，即向下偏移的高度
const height = ref(0);
// 上一个实例的最下面的坐标数字，第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id));
// 这个元素应该使用的top
const topOffset = computed(() => props.offset + lastOffset.value);

// 为下一个元素留存的offset
const bottomOffset = computed(() => height.value + topOffset.value);

const cssStyle = computed(() => ({
  top: `${topOffset.value}px`,
  zIndex: props.zIndex,
}));

const keydown = (e: Event) => {
  const event = e as KeyboardEvent;
  if (event.code === "Escape") {
    visible.value = false;
  }
};
useEventListener(document, "keydown", keydown);
const preInstances = getLastInstance();

//引入了动画，交给动画的生命周期来做就好了
// watch(visible, () => {
//   if (!visible.value) {
//     props.onDestory();
//   }
// });

function destroyComponents() {
  props.onDestory();
}

function updateHeight(){
  height.value = messageRef.value!.getBoundingClientRect().height;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let timer: any = null;

function startTimer() {
  if (props.duration === 0) return;
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
}

// 定义鼠标移入不消失的方法
function clearTimer() {
  clearTimeout(timer);
}

onMounted(() => {
  visible.value = true;
  startTimer();

  // 也交给动画的生命周期做
  // await nextTick();
  // height.value = messageRef.value!.getBoundingClientRect().height;
});

// 这个可以根据vnode获取
defineExpose({ bottomOffset, visible });
</script>

<style></style>
