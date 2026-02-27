import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Zap, Palette, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/AnimatedSection";

const SERVICES = [
  { icon: Palette, title: "تصميم الهوية البصرية", desc: "بناء هوية بصرية متكاملة تعكس جوهر علامتك التجارية" },
  { icon: Zap, title: "استراتيجية العلامة", desc: "تطوير استراتيجية شاملة لتحديد موقع علامتك في السوق" },
  { icon: Globe, title: "تصميم المواقع", desc: "تصميم مواقع احترافية تعكس هوية علامتك التجارية" },
  { icon: Send, title: "التسويق البصري", desc: "إنشاء محتوى بصري متميز لقنوات التواصل الاجتماعي" },
];

const PROCESS = [
  { step: "01", title: "الاكتشاف", desc: "فهم عميق لعلامتك وأهدافك وجمهورك المستهدف" },
  { step: "02", title: "الاستراتيجية", desc: "بناء استراتيجية متكاملة تحدد اتجاه العلامة" },
  { step: "03", title: "التصميم", desc: "تحويل الاستراتيجية إلى هوية بصرية فريدة" },
  { step: "04", title: "التسليم", desc: "تسليم جميع الملفات والإرشادات النهائية" },
];

const Agency = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            الرئيسية
          </Link>
          <span className="font-display text-lg font-bold">الوكالة</span>
          <Button size="sm" className="rounded-full">ابدأ مشروعك</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-20 text-center md:py-32">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary" />
            نقبل مشاريع مختارة
          </div>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            نبني علامات تجارية
            <br />
            <span className="text-primary">لا تُنسى</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground leading-relaxed">
            نحول رؤيتك إلى هوية بصرية قوية تترك أثراً في السوق وتبني علاقة عميقة مع جمهورك المستهدف
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button size="lg" className="rounded-full">استمارة طلب مشروع</Button>
            <Button size="lg" variant="outline" className="rounded-full">تصفح الأعمال</Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Services */}
      <section className="border-t border-border py-20">
        <div className="container">
          <AnimatedSection>
            <h2 className="mb-12 text-center font-display text-3xl font-bold">خدماتنا</h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {SERVICES.map((s) => (
              <motion.div key={s.title} variants={staggerItem}>
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border py-20">
        <div className="container">
          <AnimatedSection>
            <h2 className="mb-12 text-center font-display text-3xl font-bold">منهجية العمل</h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {PROCESS.map((p) => (
              <motion.div key={p.step} variants={staggerItem} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary font-display text-xl font-bold text-primary">
                  {p.step}
                </div>
                <h3 className="font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold">لماذا تختارنا؟</h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-4 text-right"
          >
            {[
              "منهجية استراتيجية مبنية على البحث والتحليل",
              "خبرة تمتد لأكثر من 9 سنوات في تصميم الهويات",
              "عملنا مع علامات تجارية في أكثر من 18 دولة",
              "فريق متخصص في بناء العلامات التجارية",
              "متابعة ودعم مستمر بعد تسليم المشروع",
            ].map((item) => (
              <motion.div key={item} variants={staggerItem} className="flex items-center gap-3 rounded-xl border border-border p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="border-t border-border py-20">
          <div className="container text-center">
            <h2 className="font-display text-3xl font-bold">جاهز لبناء علامتك؟</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              تواصل معنا اليوم وابدأ رحلة بناء هوية بصرية تميزك عن المنافسين
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-full px-10">ابدأ مشروعك الآن</Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <footer className="border-t border-border py-8">
        <div className="container text-center text-xs text-muted-foreground">
          جميع الحقوق محفوظة © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Agency;
