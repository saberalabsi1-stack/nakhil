import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      dir="rtl"
      position="top-center"
      toastOptions={{
        style: {
          fontFamily: "var(--font-body)",
          border: "1px solid var(--border)",
          background: "var(--card)",
          color: "var(--card-foreground)",
        },
      }}
      {...props}
    />
  );
}
