import type { Placement } from "@popperjs/core";
export interface TooltipProps {
  placement?: Placement;
  content?: string;
  trigger?: "hover" | "click";
  manual?: boolean;
  modifiers?: string[];
}

export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
}

export interface TooltipInstance {
    show: () => void;
    hide: () => void;
}