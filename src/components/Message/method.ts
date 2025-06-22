import {render,h} from 'vue'
import type { CreateMessageProps } from "./types";
import MessageConstructor from './XMessage.vue'
export  const createMessage = (props:CreateMessageProps)=>{
  const container = document.createElement('div')
  const destory = ()=>{
    render(null,container)
  }
  const newProps ={
    ...props,
    onDestory:destory
  }
  const vnode = h(MessageConstructor,newProps)
  render(vnode,container)
  // render(null,container)  // 这个方法可以清空没有卸载的dom
  document.body.appendChild(container.firstElementChild!) // ！非空断言操作符，告诉ts这个变量不是null或undefined
}
