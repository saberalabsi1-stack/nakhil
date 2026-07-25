import { ArrowLeft, Phone, ShieldCheck, Star, TreePalm } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+966500000000";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a3d2b]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1579176/pexels-photo-1579176.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a3d2b]/95 via-[#1a3d2b]/80 to-[#1a3d2b]/60" />
        <div className="absolute inset-0 palm-pattern opacity-40" />
      </div>

      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-4 py-1.5 text-sm font-semibold text-[#e0c878] mb-6">
            <ShieldCheck className="h-4 w-4" />
            مقاول معتمد للمشاريع الحكومية والخاصة
          </span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-cream mb-6">
            نوفر أجود <span className="text-gradient-gold">أنواع النخيل</span>
            <br />
            لمشروعك في جميع مناطق المملكة
          </h1>

          <p className="text-lg md:text-xl text-cream/85 leading-relaxed mb-8 max-w-2xl">
            متخصصون في توريد وغرس النخيل للمشاريع الحكومية، الفلل، والاستراحات.
            نخيل منتقى بعناية، خبرة زراعية، وضمان إنبات — مع التركيب والصيانة.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button
              variant="gold"
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              اطلب عرض سعر الآن
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10 w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-cream/15">
            <Stat icon={<TreePalm className="h-5 w-5" />} value="+15 سنة" label="خبرة في توريد النخيل" />
            <Stat icon={<ShieldCheck className="h-5 w-5" />} value="ضمان إنبات" label="على جميع الشتلات" />
            <Stat icon={<Star className="h-5 w-5" />} value="+1,200 نخلة" label="تم تركيبها بنجاح" />
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 60%, 0 100%)" }} />
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a84c]/15 text-[#e0c878]">
        {icon}
      </span>
      <div>
        <div className="font-display text-lg font-bold text-cream">{value}</div>
        <div className="text-sm text-cream/70">{label}</div>
      </div>
    </div>
  );
}
