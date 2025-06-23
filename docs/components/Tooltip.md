---
title: Tooltip | x-element
description: A tooltip element for the x-element library.
---

# Tooltip

## 基础用法

<script setup>
import Tooltip from "../../src/components/Tooltip/XTooltip.vue";

import  Button  from '../../src/components/Button/XButton.vue'

</script>

 <Tooltip content="hellow word" placement="right" trigger="hover" ref="TooltipRef">
    <div>Tootip 鼠标移入</div>
    <template #content>
      <span>hellow content</span>
    </template>
  </Tooltip>

```vue
<Tooltip
  content="hellow word"
  placement="right"
  trigger="hover"
  ref="TooltipRef"
>
    <div>Tootip</div>
    <template #content>
    <span>hellow content</span>
    </template>
</Tooltip>
```

## 功能介绍

1. 支持hover/click
2. 支持鼠标移入悬停
3. 支持placement多方位配置
4. 支持手动关闭
5. 动画
6. 等
