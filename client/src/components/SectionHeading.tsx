import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, description, align = "center", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
          <span className="h-px w-6 bg-primary/60" />
          {eyebrow}
          <span className="h-px w-6 bg-primary/60" />
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  ),
);
SectionHeading.displayName = "SectionHeading";
