---
title: Button | x-element
description: A button element for the x-element library.
---

# Button 按钮

常用的按钮元素。

## 基础用法

使用`type`、`plain`、`round`、`circle`属性来定义 Button 的样式。



<script setup>
    import  Button  from '../../src/components/Button/XButton.vue'
</script>

<Button>默认按钮</Button>
<Button type="danger">危险按钮</Button>
<Button type="success" round> test button </Button>
<Button ref="buttonRef" type="warning" disabled> test button </Button>


```vue
<Button>默认按钮</Button>
<Button type="danger">危险按钮</Button>
<Button type="success" round> test button </Button>
<Button ref="buttonRef" type="warning" disabled> test button </Button>
```