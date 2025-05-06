import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};
import { cn } from "@/lib/utils";

export const Container = ({ children, className }: Props) => {
  return (
    <section
      className={cn(
        "flex flex-col sm:flex-row sm:mt-10 mx-auto max-w-[880px] px-6 py-12",
        className
      )}
    >
      {children}
    </section>
  );
};
