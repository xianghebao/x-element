import type { Placement } from "@popperjs/core";
export interface TooltipProps {
  placement?: Placement;
  content?: string;
  trigger?: "hover" | "click";
}

export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
}
