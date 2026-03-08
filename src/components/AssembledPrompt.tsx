import { Copy, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface AssembledPromptProps {
  prompt: string;
  selectionCount: number;
  onReset: () => void;
  platform: "nanobanana" | "kling";
  onPlatformChange: (p: "nanobanana" | "kling") => void;
}

export function AssembledPrompt({
  prompt,
  selectionCount,
  onReset,
  platform,
  onPlatformChange,
}: AssembledPromptProps) {
  const handleCopy = () => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
  };

  return (
    <div className="border border-border rounded-xl bg-card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground text-sm">Assembled Prompt</h2>
        </div>
        <div className="flex items-center bg-secondary rounded-lg p-0.5">
          <button
            onClick={() => onPlatformChange("nanobanana")}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
              platform === "nanobanana"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Nano Banana
          </button>
          <button
            onClick={() => onPlatformChange("kling")}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
              platform === "kling"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Kling
          </button>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-3 min-h-[80px] max-h-[200px] overflow-y-auto scrollbar-thin">
        {prompt ? (
          <p className="text-sm text-foreground font-mono leading-relaxed">{prompt}</p>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Select options above to build your prompt...
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          disabled={!prompt}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed glow-primary"
        >
          <Copy className="w-3.5 h-3.5" />
          Copy
        </button>
        <button
          onClick={onReset}
          disabled={selectionCount === 0}
          className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg text-sm font-medium transition-all hover:bg-chip-hover disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {selectionCount > 0 && (
        <p className="text-xs text-muted-foreground text-center">
          {selectionCount} option{selectionCount !== 1 ? "s" : ""} selected
        </p>
      )}
    </div>
  );
}
