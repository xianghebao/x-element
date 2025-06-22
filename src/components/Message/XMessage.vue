<template>
  <div
    class="x-message"
    v-show="visible"
    :class="{
      [`x-message--${type}`]: type,
      'is-closable': showClose,
    }"
    role="alert"
  >
    <div class="x-message__content">
      <slot>
        <RenderVnode :v-node="message" v-if="message"></RenderVnode>
      </slot>
    </div>
    <div class="x-message__close" v-if="showClose" >
      <Icon icon="xmark" @click="visible = false"></Icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { MessageProps } from "./types";
import Icon from "../Icon/XIcon.vue";
import RenderVnode from "../Dropdown/RenderVnode";
const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000,
  showClose: false,
});
const visible = ref(false);

watch(visible,() => {
  if (!visible.value) {
    props.onDestory()
  }
})

function startTimer() {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
onMounted(() => {
  visible.value = true;
  startTimer();
});
</script>

<style>
.x-message {
width: max-content;
position: fixed;
left: 50%;
top: 20px;
transform: translateX(-50%);
border: 1px solid blue;
}
</style>
