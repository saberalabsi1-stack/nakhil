import { Award, Clock, MapPin, ShieldCheck, ThumbsUp, TreePalm } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const REASONS = [
  { icon: Award, title: "خبرة موثوقة", desc: "أكثر من 15 سنة في توريد وغرس النخيل عبر مناطق المملكة." },
  { icon: ShieldCheck, title: "ضمان إنبات", desc: "نضمن تجذّر النخيل مع متابعة فنية لمدة 6 أشهر." },
  { icon: MapPin, title: "تغطية وطنية", desc: "نخدم جميع مناطق المملكة — من الشمال إلى الجنوب." },
  { icon: Clock, title: "التزام بالمواعيد", desc: "تسليم وتركيب في الموعد المتفق عليه دون تأخير." },
  { icon: TreePalm, title: "نخيل منتقى", desc: "فحص صحة كل شتلة قبل التوريد من مزارع معتمدة." },
  { icon: ThumbsUp, title: "خدمة ما بعد البيع", desc: "استشارات وخدمات صيانة متاحة على مدار العام." },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <SectionHeading
          eyebrow="لماذا نحن"
          title="شريك موثوق لمشاريع النخيل"
          description="نجمع بين الخبرة الميدانية والالتزام بالجودة لنقدّم لك نخيلاً يدوم."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof REASONS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = reason.icon;
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <h3 className="font-display text-base font-bold mb-1">{reason.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
      </div>
    </div>
  );
}
