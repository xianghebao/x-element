import type { VNode, ComponentInternalInstance } from "vue";
export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: "success" | "info" | "warning" | "error";
  onDestory: () => void;
  id: string;
  offset?: number;
  zIndex:number
}

export type CreateMessageProps = Omit<MessageProps, "onDestory" | "id" | 'zIndex'>;

export interface MessageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: MessageProps;
  destroy:()=>void
}
