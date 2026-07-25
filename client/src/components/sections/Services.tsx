import { Leaf, TreePalm, Truck, Wrench, ShieldCheck, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: TreePalm,
    title: "توريد النخيل",
    desc: "توريد نخيل منتقى من أجود المزارع المعتمدة، بأحجام مختلفة تناسب المشاريع الكبرى والفلل الخاصة.",
  },
  {
    icon: Wrench,
    title: "الغرس والتركيب",
    desc: "فريق متخصص لغرس وتثبيت النخيل في الموقع مع تجهيز التربة وإضافة المغذيات اللازمة لضمان الجذور.",
  },
  {
    icon: Droplets,
    title: "أنظمة الري",
    desc: "تصميم وتركيب أنظمة ري متطورة (تنقيط/محوري) تناسب احتياجات النخيل وتوفر استهلاك المياه.",
  },
  {
    icon: Leaf,
    title: "الصيانة والتقليم",
    desc: "خدمات صيانة دورية: تقليم السعف، مكافحة الآفات، وتسميد لضمان صحة النخيل ومظهره على مدار العام.",
  },
  {
    icon: Truck,
    title: "النقل والتوصيل",
    desc: "نقل آمن للنخيل بكافة الأحجام عبر شاحنات مزودة لتأمين وصول الشتلات سليمة لجميع مناطق المملكة.",
  },
  {
    icon: ShieldCheck,
    title: "الضمان والمتابعة",
    desc: "ضمان إنبات على جميع الشتلات مع متابعة فنية لمدة 6 أشهر لضمان تجذّر النخيل وتأقلمه في موقعه.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول متكاملة لنخيل مشاريعك"
          description="من اختيار النخيلة إلى ضمان نموها — نرافقك في كل خطوة."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = service.icon;
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Card className="group h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/40">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-full transition-colors group-hover:bg-primary/10" />
          <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
            <Icon className="h-7 w-7" />
          </span>
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
          <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
        </CardContent>
      </Card>
    </div>
  );
}
