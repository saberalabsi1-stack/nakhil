import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "م. عبدالله القحطاني",
    role: "مدير مشاريع — أمانة الرياض",
    text: "تعاملنا معهم في مشروع تطوير حدائق، الالتزام بالمواعيد وجودة النخيل تجاوز توقعاتنا. شريك موثوق فعلاً.",
    rating: 5,
  },
  {
    name: "أ. نورة العتيبي",
    role: "مالكة فيلا — حي الياسمين",
    text: "اختيارهم للأصناف نصحني بشكل ممتاز، والنخيل ما زال مزدهر بعد سنتين. خدمة احترافية من البداية للنهاية.",
    rating: 5,
  },
  {
    name: "م. فهد الدوسري",
    role: "مقاول عام — مشروع استراحة",
    text: "أنقذونا في مشروع استراحة بطلب عاجل، وصلوا في الموعد والنخيل بجودة ممتازة. أنصح بهم للمشاريع الكبيرة.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="آراء عملائنا"
          title="ثقة تتجدد مع كل مشروع"
          description="ما قاله عملاؤنا عن تجربتهم معنا."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Quote className="h-8 w-8 text-primary/30" />
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#c9a84c] text-[#c9a84c]" />
        ))}
      </div>
      <p className="text-foreground leading-relaxed flex-1">{t.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-display font-bold">
          {t.name.charAt(0)}
        </span>
        <div>
          <div className="font-display font-bold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}
