import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Chip } from "./Chip";
import type { PromptCategory } from "@/data/promptData";

interface PromptSectionProps {
  category: PromptCategory;
  isSelected: (catId: string, option: string) => boolean;
  toggleOption: (catId: string, option: string) => void;
  selectedCount: number;
}

export function PromptSection({
  category,
  isSelected,
  toggleOption,
  selectedCount,
}: PromptSectionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
              category.color === "primary"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground"
            )}
          >
            {category.step}
          </span>
          <span className="font-semibold text-foreground">{category.label}</span>
          {category.optional && (
            <span className="text-xs text-muted-foreground">(optional)</span>
          )}
          {selectedCount > 0 && (
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono">
              {selectedCount}
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200",
            expanded && "rotate-180"
          )}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-4">
          {category.subcategories ? (
            <div className="space-y-3">
              {category.subcategories.map((sub) => (
                <div key={sub.label}>
                  <p className="text-xs text-muted-foreground font-medium mb-1.5 uppercase tracking-wider">
                    {sub.label}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {sub.options.map((opt) => (
                      <Chip
                        key={opt}
                        label={opt}
                        active={isSelected(category.id, opt)}
                        onClick={() => toggleOption(category.id, opt)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-1.5">
              {category.options.map((opt) => (
                <Chip
                  key={opt}
                  label={opt}
                  active={isSelected(category.id, opt)}
                  onClick={() => toggleOption(category.id, opt)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
