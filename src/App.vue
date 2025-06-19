<script setup lang="ts">
import { ref, onMounted } from "vue";
import Collapse from "./components/Collapse/XCollapse.vue";
import CollapseItem from "./components/Collapse/XCollapseItem.vue";
import Button from "./components/Button/XButton.vue";
import Icon from "./components/Icon/XIcon.vue";
import Tooltip from "./components/Tooltip/XTooltip.vue";
import type {TooltipInstance} from './components/Tooltip/types'
const trigger = "click"
const buttonRef = ref<HTMLButtonElement>();
const openValue = ref(["a"]);
const TooltipRef = ref<TooltipInstance>();
const onk = () =>{
  TooltipRef.value?.show()
}
onMounted(() => {
  console.log(buttonRef.value);
});
</script>

<template>
  <a href="">button</a>
  <main>
    <Button ref="buttonRef" type="primary" plain @click="onk"> test button </Button>
    <Button ref="buttonRef" type="success" round> test button </Button>
    <Button ref="buttonRef" type="warning"> test button </Button>
    <Button ref="buttonRef" type="warning" disabled> test button </Button>
  </main>

  <a href="">Collapse</a>
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
  <a href="">icon</a>
  <div>
    <Icon icon="fa-solid fa-house" type="primary" />
    <Icon icon="fa-solid fa-user-secret" type="primary" color="red" />
  </div>
  <a href="">Tooltip</a><br/>
  <Tooltip content="hellow word" placement="bottom" :trigger="trigger" manual ref="TooltipRef">
    <h1>哈哈哈哈tooltip</h1>
    <!-- 传了具名插槽， 上面的content属性就失效了 -->
    <template #content>
      <h2>title4</h2>
    </template>
  </Tooltip>
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
