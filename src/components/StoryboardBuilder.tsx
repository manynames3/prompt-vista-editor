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
  ArrowUp,
  ArrowDown,
  CopyPlus,
  StickyNote,
  ChevronsUpDown,
  RotateCcw,
  Shuffle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  STORYBOARD_TEMPLATES,
  type StoryboardTemplate,
  type StoryboardScene,
} from "@/data/storyboardTemplates";
import { StoryboardTimeline } from "@/components/StoryboardTimeline";
import { SceneChipPicker } from "@/components/SceneChipPicker";

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
  transition: "",
  notes: "",
});

const DURATION_PRESETS = ["3s", "4s", "5s", "6s", "8s", "10s"];

const TRANSITION_PRESETS = [
  "Cut",
  "Crossfade",
  "Match cut",
  "Jump cut",
  "Whip pan transition",
  "Fade to black",
  "Fade from black",
  "Morph transition",
  "Zoom transition",
  "Swipe",
];

export function StoryboardBuilder() {
  const [scenes, setScenes] = useState<StoryboardScene[]>([EMPTY_SCENE()]);
  const [expandedScenes, setExpandedScenes] = useState<Set<string>>(
    new Set([scenes[0].id])
  );
  const [templateExpanded, setTemplateExpanded] = useState(true);
  const [activeField, setActiveField] = useState<{ sceneId: string; field: "startFrame" | "endFrame" | "motion" } | null>(null);

  const allExpanded = expandedScenes.size === scenes.length;

  const toggleExpandAll = () => {
    if (allExpanded) {
      setExpandedScenes(new Set());
    } else {
      setExpandedScenes(new Set(scenes.map((s) => s.id)));
    }
  };

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

  const duplicateScene = useCallback((id: string) => {
    setScenes((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx === -1) return prev;
      const clone = { ...prev[idx], id: generateId(), title: `${prev[idx].title} (copy)` };
      const next = [...prev];
      next.splice(idx + 1, 0, clone);
      return next;
    });
    toast.success("Scene duplicated");
  }, []);

  const moveScene = useCallback((id: string, direction: "up" | "down") => {
    setScenes((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx === -1) return prev;
      const targetIdx = direction === "up" ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= prev.length) return prev;
      const next = [...prev];
      [next[idx], next[targetIdx]] = [next[targetIdx], next[idx]];
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

  const insertChipToField = useCallback((text: string) => {
    if (!activeField) {
      toast.error("Click on a prompt field first, then pick a chip");
      return;
    }
    setScenes((prev) =>
      prev.map((s) => {
        if (s.id !== activeField.sceneId) return s;
        const current = s[activeField.field];
        const separator = current ? ", " : "";
        return { ...s, [activeField.field]: current + separator + text };
      })
    );
  }, [activeField]);

  const loadTemplate = useCallback((template: StoryboardTemplate) => {
    const loaded = template.scenes.map((s) => ({
      ...s,
      id: generateId(),
      transition: s.transition || "",
      notes: "",
    }));
    setScenes(loaded);
    setExpandedScenes(new Set(loaded.map((s) => s.id)));
    toast.success(`Loaded "${template.name}" storyboard`);
  }, []);

  const clearStoryboard = useCallback(() => {
    const fresh = EMPTY_SCENE();
    setScenes([fresh]);
    setExpandedScenes(new Set([fresh.id]));
    setActiveField(null);
    toast.success("Storyboard cleared");
  }, []);

  const copyAllPrompts = useCallback(() => {
    const lines = scenes
      .map((s, i) => {
        const parts = [
          `=== SCENE ${i + 1}: ${s.title || "Untitled"} (${s.duration}) ===`,
          "",
          `📸 START FRAME:`,
          s.startFrame || "(empty)",
          "",
          `📸 END FRAME:`,
          s.endFrame || "(empty)",
          "",
          `🎬 MOTION PROMPT:`,
          s.motion || "(empty)",
          ...(s.transition ? ["", `↔️ TRANSITION: ${s.transition}`] : []),
          ...(s.notes ? ["", `📝 NOTES:`, s.notes] : []),
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
      <div className="flex items-start justify-between mb-1">
        <div>
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Clapperboard className="w-5 h-5 text-primary" />
            Storyboard Planner
          </h2>
          <p className="text-sm text-muted-foreground">
            Plan scenes shot-by-shot. Build start & end frames, then add motion prompts.
          </p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={toggleExpandAll}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-secondary transition-colors"
            title={allExpanded ? "Collapse all" : "Expand all"}
          >
            <ChevronsUpDown className="w-3.5 h-3.5" />
            {allExpanded ? "Collapse" : "Expand"}
          </button>
          {hasContent && (
            <button
              onClick={clearStoryboard}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive px-2 py-1.5 rounded-md hover:bg-destructive/10 transition-colors"
              title="Clear storyboard"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
        </div>
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
          <Film className="w-3.5 h-3.5" /> Motion Video
        </span>
        <ArrowRight className="w-3 h-3 shrink-0" />
        <span className="flex items-center gap-1 shrink-0 text-muted-foreground font-medium">
          <Shuffle className="w-3.5 h-3.5" /> Transition
        </span>
        <span className="ml-1 shrink-0 opacity-60">→ repeat</span>
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

      {/* Timeline */}
      {scenes.length > 0 && (
        <StoryboardTimeline
          scenes={scenes}
          activeSceneId={[...expandedScenes][0]}
          onSceneClick={(id) => {
            setExpandedScenes(new Set([id]));
          }}
        />
      )}

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
                  {scene.notes && (
                    <StickyNote className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  <span
                    role="button"
                    onClick={(e) => { e.stopPropagation(); moveScene(scene.id, "up"); }}
                    className={cn("p-1.5 rounded-md transition-colors", index === 0 ? "opacity-30 pointer-events-none" : "hover:bg-secondary")}
                  >
                    <ArrowUp className="w-3.5 h-3.5 text-muted-foreground" />
                  </span>
                  <span
                    role="button"
                    onClick={(e) => { e.stopPropagation(); moveScene(scene.id, "down"); }}
                    className={cn("p-1.5 rounded-md transition-colors", index === scenes.length - 1 ? "opacity-30 pointer-events-none" : "hover:bg-secondary")}
                  >
                    <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </span>
                  <span
                    role="button"
                    onClick={(e) => { e.stopPropagation(); duplicateScene(scene.id); }}
                    className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                    title="Duplicate scene"
                  >
                    <CopyPlus className="w-3.5 h-3.5 text-muted-foreground" />
                  </span>
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
                <div className="px-4 pb-4 space-y-2.5">
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
                    <div className="flex items-center gap-1">
                      {DURATION_PRESETS.map((d) => (
                        <button
                          key={d}
                          onClick={() => updateScene(scene.id, "duration", d)}
                          className={cn(
                            "px-2 py-1.5 rounded-md text-[11px] font-mono font-medium transition-colors",
                            scene.duration === d
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                          )}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chip picker */}
                  <SceneChipPicker
                    onInsert={(text) => {
                      if (activeField && activeField.sceneId === scene.id) {
                        insertChipToField(text);
                      } else {
                        const current = scene.startFrame;
                        const separator = current ? ", " : "";
                        updateScene(scene.id, "startFrame", current + separator + text);
                      }
                    }}
                  />

                  {/* Start Frame + End Frame — side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <PromptField
                      icon={<Image className="w-3.5 h-3.5 text-primary" />}
                      label="Start Frame"
                      sublabel="Image"
                      color="primary"
                      value={scene.startFrame}
                      onChange={(v) => updateScene(scene.id, "startFrame", v)}
                      onCopy={() => copyField("Start frame", scene.startFrame)}
                      onFocus={() => setActiveField({ sceneId: scene.id, field: "startFrame" })}
                      isActive={activeField?.sceneId === scene.id && activeField?.field === "startFrame"}
                      placeholder="Subject, composition, shot type, lighting, style..."
                      rows={3}
                    />
                    <PromptField
                      icon={<Image className="w-3.5 h-3.5 text-primary" />}
                      label="End Frame"
                      sublabel="Image"
                      color="primary"
                      value={scene.endFrame}
                      onChange={(v) => updateScene(scene.id, "endFrame", v)}
                      onCopy={() => copyField("End frame", scene.endFrame)}
                      onFocus={() => setActiveField({ sceneId: scene.id, field: "endFrame" })}
                      isActive={activeField?.sceneId === scene.id && activeField?.field === "endFrame"}
                      placeholder="What changed from start — new position, expression, framing..."
                      rows={3}
                    />
                  </div>

                  {/* Motion + Transition — side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <PromptField
                      icon={<Film className="w-3.5 h-3.5 text-accent" />}
                      label="Motion Prompt"
                      sublabel="Video"
                      color="accent"
                      value={scene.motion}
                      onChange={(v) => updateScene(scene.id, "motion", v)}
                      onCopy={() => copyField("Motion prompt", scene.motion)}
                      onFocus={() => setActiveField({ sceneId: scene.id, field: "motion" })}
                      isActive={activeField?.sceneId === scene.id && activeField?.field === "motion"}
                      placeholder="Camera movement, speed, mood..."
                      rows={3}
                    />

                    {/* Transition + Notes stacked */}
                    <div className="space-y-2.5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Shuffle className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs font-semibold text-foreground">Transition</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {TRANSITION_PRESETS.map((t) => (
                            <button
                              key={t}
                              onClick={() => updateScene(scene.id, "transition", scene.transition === t ? "" : t)}
                              className={cn(
                                "px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors border",
                                scene.transition === t
                                  ? "bg-primary/20 text-primary border-primary/30"
                                  : "bg-secondary/60 text-muted-foreground hover:text-foreground border-transparent hover:border-border"
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <StickyNote className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs font-semibold text-foreground">Notes</span>
                        </div>
                        <textarea
                          value={scene.notes}
                          onChange={(e) => updateScene(scene.id, "notes", e.target.value)}
                          placeholder="References, music cues, context..."
                          rows={2}
                          className="w-full bg-secondary/50 text-foreground text-sm rounded-lg px-3 py-2 border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground leading-relaxed resize-none scrollbar-thin"
                        />
                      </div>
                    </div>
                  </div>
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
  onFocus,
  isActive,
  placeholder,
  rows = 3,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  color: "primary" | "accent";
  value: string;
  onChange: (v: string) => void;
  onCopy: () => void;
  onFocus: () => void;
  isActive: boolean;
  placeholder: string;
  rows?: number;
}) {
  return (
    <div className="space-y-1">
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
          {isActive && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
              ← chips here
            </span>
          )}
        </div>
        {value && (
          <button
            onClick={onCopy}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Copy className="w-3 h-3" />
          </button>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full bg-secondary/50 text-foreground text-sm rounded-lg px-3 py-2 border focus:outline-none transition-colors placeholder:text-muted-foreground font-mono leading-relaxed resize-none scrollbar-thin",
          isActive ? "border-primary ring-1 ring-primary/20" : "border-border focus:border-primary"
        )}
      />
    </div>
  );
}
