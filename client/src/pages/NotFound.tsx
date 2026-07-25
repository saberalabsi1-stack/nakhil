import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
      <div>
        <p className="font-display text-7xl font-black text-primary mb-4">404</p>
        <h1 className="font-display text-2xl font-bold mb-2">الصفحة غير موجودة</h1>
        <p className="text-muted-foreground mb-6">عذراً، الصفحة التي تبحث عنها غير متوفرة.</p>
        <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
