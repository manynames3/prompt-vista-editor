import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROMPT_CATEGORIES } from "@/data/promptData";

// Subset of categories useful for scene prompts
const SCENE_CATEGORIES = ["shot", "lighting", "camera", "mood", "colorpalette", "style"];

interface SceneChipPickerProps {
  onInsert: (text: string) => void;
}

export function SceneChipPicker({ onInsert }: SceneChipPickerProps) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(SCENE_CATEGORIES[0]);

  const categories = PROMPT_CATEGORIES.filter((c) =>
    SCENE_CATEGORIES.includes(c.id)
  );

  const active = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 hover:bg-secondary/50 transition-colors"
      >
        <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="w-3 h-3 text-primary" />
          Quick-add prompt chips
        </span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="px-3 pb-3 space-y-2">
          {/* Category tabs */}
          <div className="flex gap-1 overflow-x-auto scrollbar-thin pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-2 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Chips */}
          <div className="max-h-32 overflow-y-auto scrollbar-thin space-y-2">
            {active.subcategories ? (
              active.subcategories.map((sub) => (
                <div key={sub.label}>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1">
                    {sub.label}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {sub.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => onInsert(opt)}
                        className="px-2 py-0.5 rounded-full text-[11px] bg-secondary/60 text-foreground hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-wrap gap-1">
                {active.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onInsert(opt)}
                    className="px-2 py-0.5 rounded-full text-[11px] bg-secondary/60 text-foreground hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
