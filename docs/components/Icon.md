---
title: Icon | x-element
description: An icon element for the x-element library.
---

# Icon
基于fontawesome 


## 基础用法

<script setup>
    import  Icon  from '../../src/components/Icon/XIcon.vue'
</script>

<Icon class='icon' icon="fa-solid fa-user-secret" type="primary" color="green" />
<Icon class='icon' icon="fa-solid fa-house" type="primary" />
<Icon class='icon' icon="fa-solid fa-paperclip" />
<a href="https://fontawesome.com/search?ip=classic&s=solid&o=r" target="_blank">fontawesome</a>

<style>
.icon{
    margin-right: 10px;
    border:1px solid #ccc;
    padding: 10px;
    cursor: pointer;
}
</style>

```vue
    <Icon icon="fa-solid fa-user-secret" type="primary" color="red" />
```

## 功能介绍
待更新