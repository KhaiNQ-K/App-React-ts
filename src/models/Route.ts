import { ReactElement, ReactNode, ElementType } from "react";

export interface Route {
  path: string;
  component: ElementType;
  layout: ElementType | null;
}
