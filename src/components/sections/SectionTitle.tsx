import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export const SectionTitle = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        "font-medium text-foreground mb-6 max-w-[186px] flex-1 sm:sticky top-12 h-min",
        className
      )}
    >
      {children}
    </h2>
  );
};
