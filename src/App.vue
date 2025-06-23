<script setup lang="ts">
import { ref, onMounted, h } from "vue";
import Collapse from "./components/Collapse/XCollapse.vue";
import CollapseItem from "./components/Collapse/XCollapseItem.vue";
import Button from "./components/Button/XButton.vue";
import Icon from "./components/Icon/XIcon.vue";
import Dropdown from "./components/Dropdown/XDropdown.vue";
import Tooltip from "./components/Tooltip/XTooltip.vue";
import type { TooltipInstance } from "./components/Tooltip/types";
// import Message  from "./components/Message/XMessage.vue";
import { createMessage } from "./components/Message/method";
const trigger = "click";
const buttonRef = ref<HTMLButtonElement>();
const openValue = ref(["a"]);
const TooltipRef = ref<TooltipInstance>();
const onTooltipClick = () => {
  TooltipRef.value?.show();
};
onMounted(() => {
  createMessage({ message: "hellow" });
  createMessage({ message: "第二个hellow", duration: 0, showClose: true, type: "success" });
  createMessage({ message: "第三个hellow", showClose: true, type: "error" });
  createMessage({
    message: "哦豁！！！！",
    duration: 0,
    showClose: true,
  });

  // 模拟手动删除
  //   setTimeout(() => {
  //   Instance.destroy()
  // },2000)
});
const options = [
  { key: 1, label: h("b", "this is h") },
  { key: 2, label: "aaaa", disabled: true },
  { key: 3, label: "xxxx" },
  { key: 4, label: "ffff" },
];
</script>

<template>
  <h2>button</h2>
  <main>
    <Button ref="buttonRef" type="primary" plain @click="onTooltipClick"> test button </Button>
    <Button ref="buttonRef" type="success" round> test button </Button>
    <Button ref="buttonRef" type="warning"> test button </Button>
    <Button ref="buttonRef" type="info" disabled> test button </Button>
  </main>
  <h2>collapse</h2>
  <Collapse v-model="openValue">
    <CollapseItem title="title1" name="a">
      <template #header>
        <h2>title1</h2>
      </template>
    </CollapseItem>
    <CollapseItem title="title2" name="c" disabled>
      <template #header>
        <h2>title2</h2>
      </template>
    </CollapseItem>
    <CollapseItem title="title2" name="b">
      <template #header>
        <h2>title3</h2>
      </template>
    </CollapseItem>
    <CollapseItem title="title2" name="c" disabled>
      <template #header>
        <h2>title4</h2>
      </template>
    </CollapseItem>
  </Collapse>
  <h2>icon</h2>
  <div>
    <Icon icon="fa-solid fa-house" type="primary" />
    <Icon icon="fa-solid fa-user-secret" type="primary" color="red" />
  </div>
  <h2>Tooltip</h2>
  <Tooltip content="hellow word" placement="right" :trigger="trigger" ref="TooltipRef">
    <h1>哈哈哈哈tooltip</h1>
  </Tooltip>
  <h2>Dropdown 点击下面的芜湖</h2>
  <div>
    <Dropdown :menu-options="options" trigger="click">
      <span>芜湖</span>
    </Dropdown>
  </div>
  <!-- <Message message="hellow word" :duration="0" show-close></Message> 这个主要是实现方法的模板-->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
