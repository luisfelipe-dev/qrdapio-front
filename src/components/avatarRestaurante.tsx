import { cn } from "@/lib/utils";
import React from "react";

type AvatarRestauranteProps = {
  className?: string;
};

export function AvatarRestaurante({ className }: AvatarRestauranteProps) {
  const defaultClass =
    "w-[72px] h-[72px] rounded-full bg-slate-950 relative bg-cover bg-center";
  const combinedClass = cn(defaultClass, className);
  return (
    <div
      style={{
        backgroundImage: `url('https://s2.glbimg.com/y8zQCWQhTKQTSEUy1biLt0rsXGY=/620x430/e.glbimg.com/og/ed/f/original/2021/12/01/outback.jpeg')`,
      }}
      className={combinedClass}
    ></div>
  );
};

