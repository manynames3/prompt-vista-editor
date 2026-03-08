import { Film, Image, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StoryboardScene } from "@/data/storyboardTemplates";

function parseDuration(dur: string): number {
  const match = dur.match(/^(\d+(?:\.\d+)?)\s*s?$/i);
  return match ? parseFloat(match[1]) : 4;
}

interface StoryboardTimelineProps {
  scenes: StoryboardScene[];
  onSceneClick: (id: string) => void;
  activeSceneId?: string;
}

export function StoryboardTimeline({ scenes, onSceneClick, activeSceneId }: StoryboardTimelineProps) {
  const totalDuration = scenes.reduce((sum, s) => sum + parseDuration(s.duration), 0);

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Timeline</span>
        </div>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {totalDuration}s total · {scenes.length} scene{scenes.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="px-4 py-3 overflow-x-auto scrollbar-thin">
        {/* Filmstrip */}
        <div className="flex gap-1.5 min-w-max">
          {scenes.map((scene, i) => {
            const dur = parseDuration(scene.duration);
            const widthPx = Math.max(80, (dur / totalDuration) * 600);
            const filled = [scene.startFrame, scene.endFrame, scene.motion].filter(Boolean).length;
            const isActive = scene.id === activeSceneId;

            return (
              <button
                key={scene.id}
                onClick={() => onSceneClick(scene.id)}
                style={{ width: `${widthPx}px` }}
                className={cn(
                  "relative flex flex-col justify-between rounded-lg border-2 p-2 transition-all shrink-0 text-left group hover:border-primary/60",
                  isActive
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary/30 hover:bg-secondary/50"
                )}
              >
                {/* Scene number + title */}
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {i + 1}
                  </span>
                  <span className="text-[11px] font-medium text-foreground truncate">
                    {scene.title || `Scene ${i + 1}`}
                  </span>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-1">
                  <span className={cn("w-1.5 h-1.5 rounded-full", scene.startFrame ? "bg-primary" : "bg-border")} title="Start Frame" />
                  <span className={cn("w-1.5 h-1.5 rounded-full", scene.endFrame ? "bg-primary" : "bg-border")} title="End Frame" />
                  <span className={cn("w-1.5 h-1.5 rounded-full", scene.motion ? "bg-accent" : "bg-border")} title="Motion" />
                  <span className="ml-auto text-[10px] text-muted-foreground font-mono">{scene.duration}</span>
                </div>

                {/* Duration bar */}
                <div className="mt-1.5 h-1 rounded-full bg-border overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      filled === 3 ? "bg-primary" : filled > 0 ? "bg-primary/50" : "bg-border"
                    )}
                    style={{ width: `${(filled / 3) * 100}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Time markers */}
        <div className="flex gap-1.5 min-w-max mt-1">
          {scenes.map((scene) => {
            const dur = parseDuration(scene.duration);
            const widthPx = Math.max(80, (dur / totalDuration) * 600);
            return (
              <div key={scene.id} style={{ width: `${widthPx}px` }} className="text-center">
                <span className="text-[9px] text-muted-foreground font-mono">{dur}s</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
