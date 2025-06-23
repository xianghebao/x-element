---
title: Icon | x-element
description: An icon element for the x-element library.
---

# Message



## 基础用法

<script setup>
import { createMessage } from "../../src/components/Message/method";
import  Button  from '../../src/components/Button/XButton.vue'
import { h } from "vue";

const handleClick = () => {
    createMessage({
        message:  h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: red' }, 'VNode')
          ]),
        type: 'success',
        duration: 2000,
        showClose: true,
    })
}
</script>
<Button @click="handleClick">message</Button>

```vue
createMessage({
    message: 'Hello World',
    type: 'success',
    duration: 2000,
    showClose: true,
})
```

## 功能介绍
1. 支持手动关闭
2. 支持esc键关闭
3. 类型选择
4. 支持自定义关闭按钮
5. 动画
6. 支持鼠标移入悬停
7. 支持vnode