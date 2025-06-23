---
title: Collapse | x-element
description: A collapse element for the x-element library.
---

# Collapse

折叠面板

## 基础用法

<script setup>
    import  Collapse  from '../../src/components/Collapse/XCollapse.vue'
    import  CollapseItem  from '../../src/components/Collapse/XCollapseItem.vue'
</script>

<Collapse v-model="openValue" class='collapse'>
    <CollapseItem title="title1" name="a">
      <template #header>
        <div>title1</div>
      </template>
      <template #content>
        <div>hellow word</div>
      </template>
    </CollapseItem>
    <CollapseItem title="title2" name="c" disabled>
      <template #header>
        <div>title2</div>
      </template>
    </CollapseItem>
    <CollapseItem title="title2" name="b">
      <template #header>
        <div>title3</div>
      </template>
    </CollapseItem>
    <CollapseItem title="title2" name="c" disabled>
      <template #header>
        <div>title4</div>
      </template>
    </CollapseItem>
  </Collapse>

<style>
.collapse{
  padding:20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

</style>

```vue
<x-collapse>
  <x-collapse-item title="标题1">内容1</x-collapse-item>
  <x-collapse-item title="标题2">内容2</x-collapse-item>
  <x-collapse-item title="标题3">内容3</x-collapse-item>
</x-collapse>
```

## 功能介绍
待更新