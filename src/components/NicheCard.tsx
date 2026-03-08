import { useState } from "react";
import { ChevronDown, Copy, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { NicheTemplate } from "@/data/nicheTemplates";

interface NicheSectionProps {
  niche: NicheTemplate;
  onApplyPrompt: (prompt: string) => void;
}

export function NicheCard({ niche, onApplyPrompt }: NicheSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{niche.icon}</span>
          <div className="text-left">
            <p className="font-semibold text-foreground text-sm">{niche.name}</p>
            <p className="text-xs text-muted-foreground">{niche.description}</p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0",
            expanded && "rotate-180"
          )}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-2">
          {niche.presets.map((preset) => (
            <div
              key={preset.label}
              className="bg-secondary/40 rounded-lg p-3 group hover:bg-secondary/70 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-primary shrink-0" />
                  {preset.label}
                </p>
                <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(preset.prompt);
                      toast.success("Prompt copied!");
                    }}
                    className="p-1.5 rounded-md bg-chip hover:bg-chip-hover transition-colors"
                    title="Copy prompt"
                  >
                    <Copy className="w-3 h-3 text-foreground" />
                  </button>
                  <button
                    onClick={() => onApplyPrompt(preset.prompt)}
                    className="px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    Use
                  </button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                {preset.prompt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
