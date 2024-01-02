import { cn } from "@/lib/utils";
import React from "react";

type AvatarRestauranteProps = {
  className?: string;
};

export function AvatarRestaurante({ className }: AvatarRestauranteProps) {
  const defaultClass =
    "w-[71px] h-[56px] sm:w-[72px] md:w-[63px] sm:h-[56px] bg-slate-950 relative bg-cover bg-center";
  const combinedClass = cn(defaultClass, className);
  return (
    <div
      style={{
        background: `url('/images/avatar-mada.jpg') no-repeat center`,
        backgroundSize: 'cover',
        borderRadius: '50%'
      }}
      className={combinedClass}
    ></div>
  );
}
