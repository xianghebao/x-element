<template>
  <div class="x-dropdown">
    <ToolTip
      :trigger="trigger"
      :placement="placement"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="x-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
            <li
              class="x-dropdown__item"
              @click="itemClick(item)"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
            >
              <RenderVnode :v-node="item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </ToolTip>
  </div>
</template>
<script lang="ts" setup>
import type { DropdownEmits, DropdownProps, MenuOption, DropdownInstance } from "./types";
import ToolTip from "../Tooltip/XTooltip.vue";
import RenderVnode from "./RenderVnode";
import { onMounted, ref } from "vue";
import type { TooltipInstance } from "../Tooltip/types";
const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true,
});
const emits = defineEmits<DropdownEmits>();

const tooltipRef = ref<TooltipInstance>();
const visibleChange = (visible: boolean) => {
  emits("visible-change", visible);
};

const itemClick = (e: MenuOption) => {
  if (e.disabled) return;
  emits("select", e);
  if (props.hideAfterClick) {
    tooltipRef.value?.hide();
  }
};

defineExpose({
  //创建一个闭包，防止不能获取到实例，当再次调用时就可以拿到最新的值，其他的组件也要修改
  show: () => tooltipRef.value?.show,
  hide: () => tooltipRef.value?.hide,
});
</script>
