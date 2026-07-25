import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "تطوير حديقة الملك سلمان",
    category: "مشروع حكومي",
    desc: "توريد وغرس 320 نخلة من أصناف متعددة ضمن مشروع تطوير الحدائق العامة.",
    image: "https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&w=1000",
    count: "320 نخلة",
  },
  {
    title: "فلل حي الياسمين",
    category: "فلل خاصة",
    desc: "تنسيق داخلي وتوريد نخيل برحي ومجدول لـ 18 فيلا سكنية فاخرة.",
    image: "https://images.pexels.com/photos/2597689/pexels-photo-2597689.jpeg?auto=compress&cs=tinysrgb&w=1000",
    count: "18 فيلا",
  },
  {
    title: "استراحة الملكية",
    category: "استراحات",
    desc: "تصميم وتنفيذ حديقة نخيل كاملة مع أنظمة ري وإنارة للمساء.",
    image: "https://images.pexels.com/photos/2252007/pexels-photo-2252007.jpeg?auto=compress&cs=tinysrgb&w=1000",
    count: "45 نخلة",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="مشاريعنا"
          title="نفّذنا نخيل مشاريع رأت النور"
          description="مشاريع حكومية وخاصة وثقناها بأعلى معايير الجودة والالتزام."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-2xl transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d2b]/95 via-[#1a3d2b]/30 to-transparent" />
        <span className="absolute top-4 right-4 rounded-full bg-[#c9a84c] px-3 py-1 text-xs font-bold text-[#1a3d2b]">
          {project.category}
        </span>
        <div className="absolute bottom-0 inset-x-0 p-5 text-cream">
          <span className="inline-block text-sm font-semibold text-[#e0c878] mb-1">
            {project.count}
          </span>
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
        </div>
      </div>
      <div className="p-5 bg-card">
        <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
      </div>
    </div>
  );
}
