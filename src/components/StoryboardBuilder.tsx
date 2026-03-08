import { useState, useCallback } from "react";
import {
  Plus,
  Trash2,
  Copy,
  ChevronDown,
  Film,
  Image,
  ArrowRight,
  Clapperboard,
  GripVertical,
  Sparkles,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  STORYBOARD_TEMPLATES,
  type StoryboardTemplate,
  type StoryboardScene,
} from "@/data/storyboardTemplates";

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

const EMPTY_SCENE: () => StoryboardScene = () => ({
  id: generateId(),
  title: "",
  startFrame: "",
  endFrame: "",
  motion: "",
  duration: "4s",
});

export function StoryboardBuilder() {
  const [scenes, setScenes] = useState<StoryboardScene[]>([EMPTY_SCENE()]);
  const [expandedScenes, setExpandedScenes] = useState<Set<string>>(
    new Set([scenes[0].id])
  );
  const [templateExpanded, setTemplateExpanded] = useState(true);

  const toggleExpand = (id: string) => {
    setExpandedScenes((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addScene = useCallback(() => {
    const newScene = EMPTY_SCENE();
    setScenes((prev) => [...prev, newScene]);
    setExpandedScenes((prev) => new Set(prev).add(newScene.id));
  }, []);

  const removeScene = useCallback((id: string) => {
    setScenes((prev) => (prev.length === 1 ? prev : prev.filter((s) => s.id !== id)));
    setExpandedScenes((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const updateScene = useCallback(
    (id: string, field: keyof StoryboardScene, value: string) => {
      setScenes((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
    },
    []
  );

  const loadTemplate = useCallback((template: StoryboardTemplate) => {
    const loaded = template.scenes.map((s) => ({
      ...s,
      id: generateId(),
    }));
    setScenes(loaded);
    setExpandedScenes(new Set(loaded.map((s) => s.id)));
    toast.success(`Loaded "${template.name}" storyboard`);
  }, []);

  const copyAllPrompts = useCallback(() => {
    const lines = scenes
      .map((s, i) => {
        const parts = [
          `=== SCENE ${i + 1}: ${s.title || "Untitled"} (${s.duration}) ===`,
          "",
          `📸 START FRAME (Nano Banana):`,
          s.startFrame || "(empty)",
          "",
          `📸 END FRAME (Nano Banana):`,
          s.endFrame || "(empty)",
          "",
          `🎬 MOTION PROMPT (Kling):`,
          s.motion || "(empty)",
        ];
        return parts.join("\n");
      })
      .join("\n\n");
    navigator.clipboard.writeText(lines);
    toast.success("All storyboard prompts copied!");
  }, [scenes]);

  const copyField = (label: string, value: string) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    toast.success(`${label} copied!`);
  };

  const hasContent = scenes.some(
    (s) => s.startFrame || s.endFrame || s.motion || s.title
  );

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="mb-1">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Clapperboard className="w-5 h-5 text-primary" />
          Storyboard Planner
        </h2>
        <p className="text-sm text-muted-foreground">
          Plan your scenes shot-by-shot. Create start & end frame images in{" "}
          <span className="text-primary font-medium">Nano Banana</span>, then
          generate videos between them in{" "}
          <span className="text-accent font-medium">Kling</span>.
        </p>
      </div>

      {/* Workflow guide */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 overflow-x-auto">
        <span className="flex items-center gap-1 shrink-0 text-primary font-medium">
          <Image className="w-3.5 h-3.5" /> Start Frame
        </span>
        <ArrowRight className="w-3 h-3 shrink-0" />
        <span className="flex items-center gap-1 shrink-0 text-primary font-medium">
          <Image className="w-3.5 h-3.5" /> End Frame
        </span>
        <ArrowRight className="w-3 h-3 shrink-0" />
        <span className="flex items-center gap-1 shrink-0 text-accent font-medium">
          <Film className="w-3.5 h-3.5" /> Kling Video
        </span>
        <span className="ml-1 shrink-0 opacity-60">→ repeat per scene</span>
      </div>

      {/* Templates */}
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <button
          onClick={() => setTemplateExpanded(!templateExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground text-sm">
              Pre-built Storyboard Templates
            </span>
            <span className="text-xs text-muted-foreground">
              ({STORYBOARD_TEMPLATES.length} templates)
            </span>
          </div>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform",
              templateExpanded && "rotate-180"
            )}
          />
        </button>
        {templateExpanded && (
          <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {STORYBOARD_TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => loadTemplate(t)}
                className="flex items-start gap-3 bg-secondary/40 hover:bg-secondary/70 rounded-lg p-3 text-left transition-colors group"
              >
                <span className="text-xl shrink-0 mt-0.5">{t.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {t.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">
                    {t.scenes.length} scenes
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Scenes */}
      <div className="space-y-2">
        {scenes.map((scene, index) => {
          const isExpanded = expandedScenes.has(scene.id);
          return (
            <div
              key={scene.id}
              className="border border-border rounded-xl bg-card overflow-hidden"
            >
              {/* Scene header */}
              <button
                onClick={() => toggleExpand(scene.id)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <GripVertical className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                  <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground text-sm truncate">
                    {scene.title || `Scene ${index + 1}`}
                  </span>
                  {scene.duration && (
                    <span className="flex items-center gap-0.5 text-xs text-muted-foreground shrink-0">
                      <Clock className="w-3 h-3" />
                      {scene.duration}
                    </span>
                  )}
                  {(scene.startFrame || scene.endFrame || scene.motion) && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono shrink-0">
                      {[scene.startFrame, scene.endFrame, scene.motion].filter(Boolean).length}/3
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {scenes.length > 1 && (
                    <span
                      role="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeScene(scene.id);
                      }}
                      className="p-1.5 rounded-md hover:bg-destructive/20 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-muted-foreground hover:text-destructive" />
                    </span>
                  )}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-muted-foreground transition-transform",
                      isExpanded && "rotate-180"
                    )}
                  />
                </div>
              </button>

              {/* Scene body */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-3">
                  {/* Title + Duration row */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Scene title..."
                      value={scene.title}
                      onChange={(e) =>
                        updateScene(scene.id, "title", e.target.value)
                      }
                      className="flex-1 bg-secondary/50 text-foreground text-sm rounded-lg px-3 py-2 border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                    />
                    <input
                      type="text"
                      placeholder="4s"
                      value={scene.duration}
                      onChange={(e) =>
                        updateScene(scene.id, "duration", e.target.value)
                      }
                      className="w-16 bg-secondary/50 text-foreground text-sm rounded-lg px-3 py-2 border border-border focus:border-primary focus:outline-none text-center transition-colors placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Start Frame */}
                  <PromptField
                    icon={<Image className="w-3.5 h-3.5 text-primary" />}
                    label="Start Frame"
                    sublabel="Nano Banana"
                    color="primary"
                    value={scene.startFrame}
                    onChange={(v) => updateScene(scene.id, "startFrame", v)}
                    onCopy={() => copyField("Start frame", scene.startFrame)}
                    placeholder="Describe the starting image — composition, subject, lighting, style, mood..."
                  />

                  {/* End Frame */}
                  <PromptField
                    icon={<Image className="w-3.5 h-3.5 text-primary" />}
                    label="End Frame"
                    sublabel="Nano Banana"
                    color="primary"
                    value={scene.endFrame}
                    onChange={(v) => updateScene(scene.id, "endFrame", v)}
                    onCopy={() => copyField("End frame", scene.endFrame)}
                    placeholder="Describe the ending image — what changed from the start frame..."
                  />

                  {/* Motion / Video */}
                  <PromptField
                    icon={<Film className="w-3.5 h-3.5 text-accent" />}
                    label="Motion Prompt"
                    sublabel="Kling"
                    color="accent"
                    value={scene.motion}
                    onChange={(v) => updateScene(scene.id, "motion", v)}
                    onCopy={() => copyField("Motion prompt", scene.motion)}
                    placeholder="Camera movement, transition style, speed, mood for the video between frames..."
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={addScene}
          className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2.5 rounded-xl text-sm font-medium transition-colors border border-border"
        >
          <Plus className="w-4 h-4" />
          Add Scene
        </button>
        {hasContent && (
          <button
            onClick={copyAllPrompts}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 px-5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 glow-primary"
          >
            <Copy className="w-4 h-4" />
            Copy All Prompts
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Reusable prompt text area with label & copy ── */
function PromptField({
  icon,
  label,
  sublabel,
  color,
  value,
  onChange,
  onCopy,
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  color: "primary" | "accent";
  value: string;
  onChange: (v: string) => void;
  onCopy: () => void;
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {icon}
          <span className="text-xs font-semibold text-foreground">{label}</span>
          <span
            className={cn(
              "text-[10px] px-1.5 py-0.5 rounded font-medium",
              color === "primary"
                ? "bg-primary/15 text-primary"
                : "bg-accent/15 text-accent"
            )}
          >
            {sublabel}
          </span>
        </div>
        {value && (
          <button
            onClick={onCopy}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Copy className="w-3 h-3" />
            Copy
          </button>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full bg-secondary/50 text-foreground text-sm rounded-lg px-3 py-2 border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground font-mono leading-relaxed resize-none scrollbar-thin"
      />
    </div>
  );
}
