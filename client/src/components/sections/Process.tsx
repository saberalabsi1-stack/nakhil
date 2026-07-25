import { ClipboardList, TreePalm, Wrench, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: ClipboardList,
    title: "استشارتك وطلبك",
    desc: "تواصل معنا بطلبك وموقع المشروع، نزور الموقع ونقترح الأصناف والأحجام المناسبة لبيئتك.",
  },
  {
    icon: TreePalm,
    title: "اختيار النخيل",
    desc: "ننتقي النخيل من المزارع المعتمدة وفق المواصفات المتفق عليها، مع فحص صحة كل شتلة.",
  },
  {
    icon: Wrench,
    title: "النقل والغرس",
    desc: "ننقل النخيل بأمان ونغرسه في الموقع مع تجهيز التربة وتثبيت الدعامات وأنظمة الري.",
  },
  {
    icon: ShieldCheck,
    title: "الضمان والمتابعة",
    desc: "متابعة فنية لمدة 6 أشهر مع ضمان إنبات، وخدمات صيانة دورية عند الطلب.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#1a3d2b] text-cream relative overflow-hidden">
      <div className="absolute inset-0 palm-pattern opacity-30" />
      <div className="container relative">
        <SectionHeading
          eyebrow="آلية العمل"
          title="من الطلب إلى نخلة مثمرة"
          description="أربع خطوات واضحة تضمن لك نخيلاً صحياً يدوم لسنوات."
          className="text-cream [&_h2]:text-cream [&_p]:text-cream/70 [&_span]:text-[#e0c878]"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = step.icon;
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col items-start gap-4 rounded-xl border border-[#c9a84c]/20 bg-[#122a1d]/40 p-6 transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between w-full">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a84c]/15 text-[#e0c878]">
          <Icon className="h-7 w-7" />
        </span>
        <span className="font-display text-5xl font-black text-[#c9a84c]/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-cream">{step.title}</h3>
      <p className="text-sm text-cream/70 leading-relaxed">{step.desc}</p>
    </div>
  );
}
