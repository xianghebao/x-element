<template>
  <div class="x-tooltip" v-on="outerEvents" ref="popperContainer">
    <div class="x-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <div class="x-tooltip__popper" ref="popperNode" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { TooltipEmits, TooltipProps } from "./types";
import type { Instance } from "@popperjs/core";
import { createPopper } from "@popperjs/core";
import useClickOutside from "@/hooks/useClickOutside";
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
});
const emits = defineEmits<TooltipEmits>();

const isOpen = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const popperContainer = ref<HTMLElement>();
let popperInstance: Instance | null = null;
let events: Record<string, unknown> = reactive({});
let outerEvents: Record<string, unknown> = reactive({});
useClickOutside(popperContainer, () => {
  if (isOpen.value && props.trigger === "click") {
    close();
  }
});
const open = () => {
  isOpen.value = true;
  emits("visible-change", true);
};
const close = () => {
  isOpen.value = false;
  emits("visible-change", false);
};
const togglePopper = () => {
  isOpen.value = !isOpen.value;
  emits("visible-change", isOpen.value);
};
const attachEvents = () => {
  if (props.trigger === "hover") {
    events = {
      mouseenter: open,
    };
    outerEvents = {
      mouseleave: close,
    };
  } else if (props.trigger === "click") {
    events["click"] = togglePopper;
  }
};
attachEvents();

watch(
  isOpen,
  (val) => {
    if (val) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
        });
      } else {
        popperInstance?.destroy();
      }
    }
  },
  { flush: "post" }
);
</script>
<style>
.x-tooltip {
  display: inline-block;
}
</style>
