import { Mail, MapPin, Phone } from "lucide-react";

const PHONE_NUMBER = "+966500000000";

const NAV = [
  { href: "#services", label: "خدماتنا" },
  { href: "#varieties", label: "أنواع النخيل" },
  { href: "#projects", label: "مشاريعنا" },
  { href: "#process", label: "آلية العمل" },
  { href: "#contact", label: "اطلب عرض سعر" },
];

export function Footer() {
  return (
    <footer className="bg-[#122a1d] text-cream/80">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <PalmLogo className="h-10 w-10" />
              <span className="font-display text-lg font-bold text-cream">
                مقاول توريد نخيل السعودية
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              الشريك الموثوق لتوريد وغرس أجود أنواع النخيل للمشاريع الحكومية والفلل
              والاستراحات في جميع مناطق المملكة.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-cream mb-4">روابط سريعة</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="hover:text-[#e0c878] transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-cream mb-4">تواصل معنا</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#c9a84c]" />
                <a href={`tel:${PHONE_NUMBER}`} dir="ltr">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#c9a84c]" />
                <a href="mailto:info@nakhl-sa.com">info@nakhl-sa.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#c9a84c]" />
                جميع مناطق المملكة
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} مقاول توريد نخيل السعودية. جميع الحقوق محفوظة.</p>
          <p>تصميم وتطوير في المملكة العربية السعودية</p>
        </div>
      </div>
    </footer>
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
