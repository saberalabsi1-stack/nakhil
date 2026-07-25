import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+966500000000";
const WHATSAPP_NUMBER = "966500000000";

const schema = z.object({
  name: z.string().min(2, "الرجاء إدخال الاسم"),
  phone: z.string().min(9, "الرجاء إدخال رقم جوال صحيح"),
  projectType: z.string().min(1, "الرجاء اختيار نوع المشروع"),
  region: z.string().min(2, "الرجاء إدخال المنطقة"),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const PROJECT_TYPES = ["مشروع حكومي", "فلل خاصة", "استراحة", "حديقة", "أخرى"];

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", projectType: "", region: "", quantity: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    const text = `طلب عرض سعر جديد:%0A%0A👤 الاسم: ${values.name}%0A📱 الجوال: ${values.phone}%0A🏗️ نوع المشروع: ${values.projectType}%0A📍 المنطقة: ${values.region}%0A🌳 العدد: ${values.quantity || "-"}%0A📝 ملاحظات: ${values.message || "-"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    toast.success("تم تجهيز طلبك! أكمل الإرسال عبر واتساب.");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <SectionHeading
          eyebrow="اطلب عرض سعر"
          title="جاهزون لخدمتك — اطلب عرضك الآن"
          description="املأ النموذج وسنوصل بك خلال 24 ساعة، أو تواصل مباشرة عبر واتساب."
        />
        <div
          ref={ref}
          className={cn(
            "mt-12 grid gap-8 lg:grid-cols-5 transition-all duration-500",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          {/* Info side */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <InfoCard icon={<Phone className="h-5 w-5" />} title="اتصل بنا" value={PHONE_NUMBER} href={`tel:${PHONE_NUMBER}`} />
            <InfoCard icon={<Mail className="h-5 w-5" />} title="البريد الإلكتروني" value="info@nakhl-sa.com" href="mailto:info@nakhl-sa.com" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="منطقة الخدمة" value="جميع مناطق المملكة" />
            <div className="rounded-xl border border-border bg-secondary text-secondary-foreground p-6">
              <h3 className="font-display text-lg font-bold mb-2">ساعات العمل</h3>
              <p className="text-sm text-cream/80">السبت — الخميس: 8 صباحاً — 6 مساءً</p>
              <p className="text-sm text-cream/80">الجمعة: مغلق</p>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                  <h3 className="font-display text-2xl font-bold">تم تجهيز طلبك!</h3>
                  <p className="text-muted-foreground max-w-md">
                    تم فتح واتساب لإكمال إرسال طلبك. إن لم يفتح تلقائياً، اضغط الزر أدناه.
                  </p>
                  <Button
                    variant="gold"
                    onClick={() => setSubmitted(false)}
                  >
                    إرسال طلب آخر
                  </Button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="الاسم الكامل" error={form.formState.errors.name?.message}>
                      <Input placeholder="مثال: عبدالله محمد" {...form.register("name")} />
                    </Field>
                    <Field label="رقم الجوال" error={form.formState.errors.phone?.message}>
                      <Input type="tel" placeholder="05xxxxxxxx" dir="ltr" {...form.register("phone")} />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="نوع المشروع" error={form.formState.errors.projectType?.message}>
                      <select
                        className="flex h-11 w-full rounded-lg border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        {...form.register("projectType")}
                      >
                        <option value="">اختر النوع</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="المنطقة" error={form.formState.errors.region?.message}>
                      <Input placeholder="مثال: الرياض" {...form.register("region")} />
                    </Field>
                  </div>
                  <Field label="العدد التقريبي (اختياري)">
                    <Input placeholder="مثال: 20 نخلة" {...form.register("quantity")} />
                  </Field>
                  <Field label="تفاصيل إضافية (اختياري)">
                    <Textarea placeholder="أخبرنا عن متطلبات المشروع..." {...form.register("message")} />
                  </Field>
                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    إرسال الطلب عبر واتساب
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="font-display font-bold text-foreground" dir="auto">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
