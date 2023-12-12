import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ContainerGridProps = {
  children: ReactNode;
  className?: string;
};

export function ContainerGrid({ children, className }: ContainerGridProps) {
  const defaultClass = "w-full max-w-grid mx-auto px-3";
  const combinedClass = cn(defaultClass, className);
  return <div className={combinedClass}>{children}</div>;
}
