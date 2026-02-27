import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus, LogOut } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
  image_url: string | null;
}

interface Achievement {
  id: string;
  title: string;
  event: string;
  description: string;
}

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // New project form
  const [newProject, setNewProject] = useState({ title: "", category: "", color: "bg-muted" });
  // New achievement form
  const [newAchievement, setNewAchievement] = useState({ title: "", event: "", description: "" });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/auth", { replace: true });
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth", { replace: true });
      } else {
        fetchData(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async (userId: string) => {
    setLoading(true);
    const [projectsRes, achievementsRes] = await Promise.all([
      supabase.from("projects").select("*").eq("user_id", userId).order("created_at", { ascending: false }),
      supabase.from("achievements").select("*").eq("user_id", userId).order("created_at", { ascending: false }),
    ]);
    if (projectsRes.data) setProjects(projectsRes.data);
    if (achievementsRes.data) setAchievements(achievementsRes.data);
    setLoading(false);
  };

  const addProject = async () => {
    if (!newProject.title) return;
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const { data, error } = await supabase.from("projects").insert({
      ...newProject,
      user_id: session.user.id,
    }).select().single();

    if (error) {
      toast({ title: "خطأ", description: error.message, variant: "destructive" });
    } else if (data) {
      setProjects((prev) => [data, ...prev]);
      setNewProject({ title: "", category: "", color: "bg-muted" });
      toast({ title: "تمت الإضافة" });
    }
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (!error) setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const addAchievement = async () => {
    if (!newAchievement.title) return;
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const { data, error } = await supabase.from("achievements").insert({
      ...newAchievement,
      user_id: session.user.id,
    }).select().single();

    if (error) {
      toast({ title: "خطأ", description: error.message, variant: "destructive" });
    } else if (data) {
      setAchievements((prev) => [data, ...prev]);
      setNewAchievement({ title: "", event: "", description: "" });
      toast({ title: "تمت الإضافة" });
    }
  };

  const deleteAchievement = async (id: string) => {
    const { error } = await supabase.from("achievements").delete().eq("id", id);
    if (!error) setAchievements((prev) => prev.filter((a) => a.id !== id));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="font-display text-lg font-bold">لوحة التحكم</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            خروج
          </Button>
        </div>
      </header>

      <div className="container py-8">
        <Tabs defaultValue="projects" dir="rtl">
          <TabsList className="mb-6">
            <TabsTrigger value="projects">المشاريع</TabsTrigger>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            {/* Add project form */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base font-display">إضافة مشروع جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="space-y-1">
                    <Label>اسم المشروع</Label>
                    <Input value={newProject.title} onChange={(e) => setNewProject((p) => ({ ...p, title: e.target.value }))} />
                  </div>
                  <div className="space-y-1">
                    <Label>التصنيف</Label>
                    <Input value={newProject.category} onChange={(e) => setNewProject((p) => ({ ...p, category: e.target.value }))} />
                  </div>
                  <div className="space-y-1">
                    <Label>اللون</Label>
                    <Input value={newProject.color} onChange={(e) => setNewProject((p) => ({ ...p, color: e.target.value }))} placeholder="bg-red-50" />
                  </div>
                </div>
                <Button onClick={addProject} className="gap-2 rounded-full">
                  <Plus className="h-4 w-4" />
                  إضافة
                </Button>
              </CardContent>
            </Card>

            {/* Projects list */}
            <div className="space-y-3">
              {projects.map((p) => (
                <Card key={p.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-display font-semibold">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.category}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteProject(p.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {projects.length === 0 && <p className="text-center text-sm text-muted-foreground py-8">لا توجد مشاريع بعد</p>}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            {/* Add achievement form */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-base font-display">إضافة إنجاز جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label>العنوان</Label>
                    <Input value={newAchievement.title} onChange={(e) => setNewAchievement((a) => ({ ...a, title: e.target.value }))} />
                  </div>
                  <div className="space-y-1">
                    <Label>الحدث / المسابقة</Label>
                    <Input value={newAchievement.event} onChange={(e) => setNewAchievement((a) => ({ ...a, event: e.target.value }))} />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label>الوصف</Label>
                  <Textarea value={newAchievement.description} onChange={(e) => setNewAchievement((a) => ({ ...a, description: e.target.value }))} />
                </div>
                <Button onClick={addAchievement} className="gap-2 rounded-full">
                  <Plus className="h-4 w-4" />
                  إضافة
                </Button>
              </CardContent>
            </Card>

            {/* Achievements list */}
            <div className="space-y-3">
              {achievements.map((a) => (
                <Card key={a.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-display font-semibold">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.event}</p>
                      <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteAchievement(a.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {achievements.length === 0 && <p className="text-center text-sm text-muted-foreground py-8">لا توجد إنجازات بعد</p>}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
