import { Link } from "react-router-dom";
import { Award, Briefcase, Globe, Users, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NAV_LINKS = [
  { to: "/", label: "الرئيسية" },
  { to: "/links", label: "الروابط" },
  { to: "/agency", label: "الوكالة" },
];

const STATS = [
  { value: "9+", label: "سنوات الخبرة" },
  { value: "95+", label: "مشروعات مكتملة" },
  { value: "34+", label: "مجالات صممت لها" },
  { value: "18+", label: "دول صممت لها" },
];

const PROJECTS = [
  {
    title: "هوية بصرية لمخبز هَش",
    category: "مؤسسات",
    color: "bg-red-50",
  },
  {
    title: "Seeb | سيب",
    category: "Wellness",
    color: "bg-indigo-50",
  },
  {
    title: "Seen | س",
    category: "علامات تجارية",
    color: "bg-amber-50",
  },
];

const ACHIEVEMENTS = [
  { title: "Golden Winner", event: "GDA Awards", desc: "حاصل على المركز الأول «الذهبية» كأفضل مشروع" },
  { title: "Silver Winner", event: "Gridliners Awards", desc: "حاصل على المركز الثاني «الفضية» فئة تصميم الهويات" },
  { title: "Audience Award", event: "Gridliners Awards", desc: "حاصل على جائزة الجمهور «Audience Choice Award»" },
];

const TESTIMONIALS = [
  { text: "باختصار غنيمي محترف مبدع يمتلك مهارات قوية في بناء العلامات. العمل معه كان سلساً وناجحاً بفضل خبرته.", name: "محمد زايد", role: "خطاط ومصمم هويات" },
  { text: "غنيمي من أفضل الأشخاص اللي اشتغلت معهم خلال ال ٥ سنوات الماضية. فنان ومبدع في كل التفاصيل!", name: "م. البراء دِرين", role: "مدير مشاريع ومؤسس Vitality" },
  { text: "أود أن أتقدم بالشكر الجزيل لك ولفريق العمل للوصول إلى النتائج المرجوة والمخرجات الرائعة.", name: "محمد الزبيدي", role: "أحد أعضاء فريق إنتاج" },
];

const FAQ = [
  { q: "هل تقدم خدمة تصميم الشعار بشكل منفصل؟", a: "نعم، يمكنني تقديم خدمة تصميم الشعار بشكل منفصل مع دراسة متكاملة للعلامة التجارية." },
  { q: "كم من الوقت تستغرق المشاريع عادة؟", a: "تختلف المدة حسب حجم المشروع، لكن عادة ما تستغرق الهوية البصرية من 4 إلى 8 أسابيع." },
  { q: "لماذا تعتبر الهوية البصرية أمراً هاماً لمشروعك؟", a: "الهوية البصرية هي الانطباع الأول الذي يتركه مشروعك لدى العملاء وتساعد في بناء الثقة والتميز." },
  { q: "هل يمكنك العمل على شعار أو هوية موجودة بالفعل وتحديثها؟", a: "بالتأكيد، أقدم خدمة إعادة تصميم وتطوير الهويات البصرية القائمة." },
  { q: "كم تكلفة تصميم الهوية البصرية؟", a: "تختلف التكلفة حسب نطاق المشروع ومتطلباته. تواصل معي للحصول على عرض سعر مخصص." },
];

const Home = () => (
  <div className="min-h-screen bg-background">
    {/* Navbar */}
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <span className="font-display text-lg font-bold">غُنيمي</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/agency">
          <Button size="sm" className="rounded-full">لديك علامة تجارية؟</Button>
        </Link>
      </div>
    </header>

    {/* Hero */}
    <section className="container py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            متاح لمشاريع مُختارة
          </div>
          <p className="mb-2 text-sm font-medium text-primary">مصمم هويات بصرية</p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            شريكك الاستراتيجي
            <br />
            لهُويّة علامتك التجاريّة
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
            اعمل على تحويل العلامة الى قصة، والقصة الى هُوية بصريّة من خلال منهجية تعتمد على بناء استراتيجي للعلامة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-full gap-2">
              استمارة طلب مشروع
            </Button>
            <Button variant="outline" className="rounded-full gap-2">
              تواصل معي
            </Button>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative h-72 w-60 overflow-hidden rounded-2xl bg-muted md:h-96 md:w-72">
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">صورة شخصية</div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border">
      <div className="container grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold text-foreground md:text-4xl">{s.value}</div>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold">أحدث أعمالي</h2>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          تصفح جميع الأعمال
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="group cursor-pointer overflow-hidden border-border transition-shadow hover:shadow-md">
            <div className={`${p.color} flex h-48 items-center justify-center`}>
              <span className="text-muted-foreground text-sm">معاينة المشروع</span>
            </div>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{p.category}</p>
              <h3 className="mt-1 font-display font-semibold text-foreground">{p.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Achievements */}
    <section className="container py-16">
      <h2 className="mb-8 font-display text-2xl font-bold">جوائز وإنجازات 🏆</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {ACHIEVEMENTS.map((a) => (
          <Card key={a.title} className="border-border">
            <div className="flex h-40 items-center justify-center bg-muted rounded-t-lg">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <CardContent className="p-4 text-center">
              <p className="text-xs text-muted-foreground">{a.event}</p>
              <h3 className="mt-1 font-display font-semibold">{a.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Career Highlights */}
    <section className="container py-16">
      <h2 className="mb-8 font-display text-2xl font-bold">أبرز محطات مسيرتي ✨</h2>
      <ul className="space-y-3">
        {[
          "متخرج من الهندسة المعمارية من الجامعة المصرية الروسية بالقاهرة",
          "قمت بإعادة تصميم هوية مركز تطوير التعليم الجامعي",
          "عملت مع فريق Mpire على هُوية الدوري السوري الممتاز",
          "عملت على مشروع هوية محافظة Jungfrukusten السياحية بدولة السويد",
          "قمت بتدريس دورة تصميم وبناء الهويات البصرية لأكثر من 450 طالب",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-1 text-primary">◆</span>
            {item}
          </li>
        ))}
      </ul>
    </section>

    {/* Testimonials */}
    <section className="bg-secondary/50 py-16">
      <div className="container">
        <h2 className="mb-8 font-display text-2xl font-bold">كلمات من عملائي 💬</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="border-border">
              <CardContent className="p-6">
                <div className="mb-4 text-3xl text-primary/30">❝</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="container py-16">
      <h2 className="mb-8 font-display text-2xl font-bold">أسئلة قد تراودك 💭</h2>
      <Accordion type="single" collapsible className="mx-auto max-w-2xl">
        {FAQ.map((f, i) => (
          <AccordionItem key={i} value={`q-${i}`} className="border-border">
            <AccordionTrigger className="text-sm font-medium text-right">
              <span className="ml-3 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

    {/* Newsletter */}
    <section className="border-t border-border py-16">
      <div className="container text-center">
        <h2 className="font-display text-2xl font-bold">سجّل بريدك</h2>
        <p className="mt-2 text-sm text-muted-foreground">قيمة جديدة كل أسبوع</p>
        <div className="mx-auto mt-6 flex max-w-sm gap-2">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm text-right placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button className="rounded-full">اشترك</Button>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-8">
      <div className="container text-center text-xs text-muted-foreground">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </div>
    </footer>
  </div>
);

export default Home;
