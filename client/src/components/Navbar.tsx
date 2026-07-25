import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#varieties", label: "أنواع النخيل" },
  { href: "#projects", label: "مشاريعنا" },
  { href: "#process", label: "آلية العمل" },
  { href: "#contact", label: "اطلب عرض سعر" },
];

const PHONE_NUMBER = "+966500000000";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 md:h-20 items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-3"
        >
          <PalmLogo className="h-10 w-10" />
          <span
            className={cn(
              "font-display text-base md:text-lg font-bold leading-tight transition-colors",
              scrolled ? "text-foreground" : "text-cream",
            )}
          >
            مقاول توريد نخيل السعودية
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className={cn(
                "px-3 py-2 text-sm font-semibold rounded-md transition-colors",
                scrolled
                  ? "text-foreground hover:text-primary hover:bg-primary/10"
                  : "text-cream/90 hover:text-royal-gold-light hover:bg-white/10",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="gold"
            size="sm"
            onClick={() => handleNav("#contact")}
          >
            اطلب عرض سعر الآن
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scrolled ? "text-foreground" : "text-cream",
          )}
          onClick={() => setOpen((o) => !o)}
          aria-label="القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-3 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PalmLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#1a3d2b" />
      <g stroke="#c9a84c" strokeWidth="1.6" strokeLinecap="round">
        <path d="M24 38 V20" />
        <path d="M24 20 C18 16, 14 14, 10 16 C12 19, 18 21, 24 20" fill="#c9a84c" fillOpacity="0.15" />
        <path d="M24 20 C30 16, 34 14, 38 16 C36 19, 30 21, 24 20" fill="#c9a84c" fillOpacity="0.15" />
        <path d="M24 20 C20 15, 18 10, 20 6 C23 9, 25 14, 24 20" fill="#c9a84c" fillOpacity="0.15" />
        <path d="M24 20 C28 15, 30 10, 28 6 C25 9, 23 14, 24 20" fill="#c9a84c" fillOpacity="0.15" />
        <path d="M24 20 C24 13, 24 8, 24 4" />
      </g>
      <circle cx="24" cy="20" r="1.6" fill="#c9a84c" />
    </svg>
  );
}
