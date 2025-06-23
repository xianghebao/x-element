import { render, h, shallowReactive } from "vue";
import type { CreateMessageProps, MessageContext } from "./types";
import MessageConstructor from "./XMessage.vue";
import useZIndex from '../../hooks/useZIndex';
let seed = 1;
const instances: MessageContext[] = shallowReactive([]);
export const createMessage = (props: CreateMessageProps) => {
  const {nextZIndex} = useZIndex()
  const id = `message_${seed++}`;
  const container = document.createElement("div");
  const destory = () => {
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx === -1) return;
    instances.splice(idx, 1);
    render(null, container);
  };
  const newProps = {
    ...props,
    id,
    zIndex:nextZIndex(),
    onDestory: destory,
  };
  // 手动调用删除，其实就是手动调用组件中visible的值
  const manualDestroy = () => {
    const instance = instances.find((instance) => instance.id === id);
    if (instance) {
      instance.vm.exposed!.visible.value = false;
    }
  };

  const vnode = h(MessageConstructor, newProps);
  render(vnode, container);
  // render(null,container)  // 这个方法可以清空没有卸载的dom
  document.body.appendChild(container.firstElementChild!); // ！非空断言操作符，告诉ts这个变量不是null或undefined
  const vm = vnode.component!;
  // 这些是为了处理message的位置
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destroy: manualDestroy,
  };
  instances.push(instance);
  return instance;
};

export const getLastInstance = () => {
  return instances[instances.length - 1];
};

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  // 没有找到说明是创建的第一个
  if (idx <= 0) {
    return 0;
  } else {
    const prev = instances[idx - 1];
    return prev.vm.exposed?.bottomOffset.value;
  }
};
