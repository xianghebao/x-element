---
title: Icon | x-element
description: An icon element for the x-element library.
---

# Dropdown

待优化

## 基础用法

<script setup>
import Dropdown from "../../src/components/Dropdown/XDropdown.vue";
import { h } from "vue";

const options = [
  { key: 1, label: h("b", "这是使用render函数渲染的") },
  { key: 2, label: "disabled", disabled: true },
  { key: 3, label: "word" },
  { key: 4, label: "牛排" },
];
</script>

<Dropdown :menu-options="options" trigger="click">
    <span class='clickDom'>Dropdown</span>
</Dropdown>

<style>
.clickDom{
    cursor: pointer;
}
</style>

```vue
<Dropdown :menu-options="options" trigger="click">
    <span>Dropdown</span>
</Dropdown>
```

## 功能介绍

待更新
