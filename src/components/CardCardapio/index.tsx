import { cn } from "@/lib/utils";
import React from "react";

export type CardCardapioProps = {};

const CardCardapioContent = ({ className, children, ...props }: any) => (
  <div className={cn("w-full bg-white p-4 rounded-3xl", className)} {...props}>
    {children}
  </div>
);

const CardCardapioTextBold = ({ className, ...props }: any) => (
  <p
    className={cn("text-sm text-cardapio-title font-semibold", className)}
    {...props}
  />
);

const CardCardapioTextDescription = ({ className, ...props }: any) => (
  <p className={cn("text-xs text-neutral-500", className)} {...props} />
);

const CardCardapioAvatar = ({ className, ...props }: any) => (
  <div
    className={cn("w-[108px] h-[108px] rounded-2xl ", className)}
    style={{
      background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQaoVpavsqVMiZCy-7wWiB2UtqBQWhS_jUg&usqp=CAU') no-repeat center`,
      backgroundSize: "cover",
    }}
    {...props}
  />
);

export {
  CardCardapioContent,
  CardCardapioTextBold,
  CardCardapioTextDescription,
  CardCardapioAvatar,
};
