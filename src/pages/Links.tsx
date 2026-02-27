import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Send, Globe, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/AnimatedSection";

const SOCIAL_LINKS = [
  { icon: Instagram, label: "انستجرام", handle: "@ghonimy", color: "bg-gradient-to-br from-pink-500 to-orange-400", url: "#" },
  { icon: Twitter, label: "تويتر / إكس", handle: "@ghonimy", color: "bg-foreground", url: "#" },
  { icon: Facebook, label: "فيسبوك", handle: "Ghonimy Arts", color: "bg-blue-600", url: "#" },
  { icon: Linkedin, label: "لينكدإن", handle: "ghonimy", color: "bg-blue-700", url: "#" },
  { icon: Send, label: "تليجرام", handle: "@ghonimy", color: "bg-sky-500", url: "#" },
  { icon: Globe, label: "بيهانس", handle: "ghonimy", color: "bg-blue-500", url: "#" },
];

const QUICK_LINKS = [
  { label: "منصتي الرئيسية في صناعة المحتوى للمصممين", icon: "📱" },
  { label: "مشاركة الملفات", icon: "📁" },
  { label: "تبادل الأفكار السريعة", icon: "💡" },
  { label: "أعمالي على بيهانس", icon: "🎨" },
  { label: "إلهام، كواليس، توثيق", icon: "📌" },
];

const Links = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          الرئيسية
        </Link>
        <span className="font-display text-sm font-bold">الروابط</span>
      </div>
    </header>

    <div className="container max-w-lg py-12 text-center">
      <AnimatedSection>
        <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
        <h1 className="font-display text-2xl font-bold">غُنيمي</h1>
        <p className="mt-1 text-sm text-muted-foreground">مصمم هويات بصرية</p>
        <div className="mt-6">
          <Link to="/">
            <Button className="rounded-full gap-2 px-8">
              الموقع كامل
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      {/* Quick links */}
      <AnimatedSection delay={0.2} className="mt-10">
        <h2 className="font-display text-xl font-bold">الروابط السريعة!</h2>
        <p className="mt-1 text-xs text-muted-foreground">استكشف أهم منصاتي، أعمالي، ومنتجاتي</p>
      </AnimatedSection>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 space-y-3"
      >
        {QUICK_LINKS.map((l) => (
          <motion.a
            key={l.label}
            variants={staggerItem}
            href="#"
            className="flex items-center gap-3 rounded-xl border border-border p-4 text-right text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <span className="text-lg">{l.icon}</span>
            {l.label}
          </motion.a>
        ))}
      </motion.div>

      {/* Social links */}
      <AnimatedSection delay={0.1} className="mt-10">
        <h2 className="font-display text-xl font-bold">تواصل معي</h2>
      </AnimatedSection>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-2 gap-3"
      >
        {SOCIAL_LINKS.map((s) => (
          <motion.a
            key={s.label}
            variants={staggerItem}
            href={s.url}
            className="group flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-secondary"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color} text-white`}>
              <s.icon className="h-5 w-5" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.handle}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
        جميع الحقوق محفوظة © {new Date().getFullYear()}
      </div>
    </div>
  </div>
);

export default Links;
