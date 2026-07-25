import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const VARIETIES = [
  {
    name: "نخلة المجدول",
    origin: "المغرب",
    desc: "تمر لين فاخر ذو قيمة تجارية عالية، يتميز بحجمه الكبير وطعمه الغني.",
    image: "https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "الأكثر طلباً",
  },
  {
    name: "نخلة البرحي",
    origin: "الجزيرة العربية",
    desc: "من أجود أنواع التمور في العالم، يحظى بطلب كبير في الأسواق الخليجية والعالمية.",
    image: "https://images.pexels.com/photos/37352/desert-dune-sand-sahara-37352.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "إنتاجية عالية",
  },
  {
    name: "نخلة الخلاص",
    origin: "الاحساء",
    desc: "من أشهر نخيل المنطقة الشرقية، تمر أصفر حلو مناسب للاستهلاك الطازج والتخزين.",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "متكيف محلياً",
  },
  {
    name: "نخلة العنبرة",
    origin: "المدينة المنورة",
    desc: "نخلة فاخرة ذات إنتاج مميز، مناسبة للمشاريع الفاخرة والاستراحات الراقية.",
    image: "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "فاخرة",
  },
];

export function Varieties() {
  return (
    <section id="varieties" className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <SectionHeading
          eyebrow="أنواع النخيل"
          title="نخيل منتقى بعناية من أجود الأصناف"
          description="نوفّر تشكيلة واسعة من نخيل التلقيح والإنتاج، مناسبة لكل البيئات والمشاريع."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VARIETIES.map((v, i) => (
            <VarietyCard key={v.name} variety={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VarietyCard({
  variety,
  index,
}: {
  variety: (typeof VARIETIES)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={variety.image}
          alt={variety.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-full bg-[#c9a84c] px-3 py-1 text-xs font-bold text-[#1a3d2b]">
          {variety.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg font-bold">{variety.name}</h3>
          <span className="text-xs text-muted-foreground">{variety.origin}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{variety.desc}</p>
      </div>
    </div>
  );
}
