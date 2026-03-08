import { PROMPT_CATEGORIES, EXAMPLE_COMBOS } from "@/data/promptData";
import { usePromptBuilder } from "@/hooks/usePromptBuilder";
import { PromptSection } from "@/components/PromptSection";
import { AssembledPrompt } from "@/components/AssembledPrompt";
import { Zap } from "lucide-react";

const Index = () => {
  const {
    selections,
    platform,
    setPlatform,
    toggleOption,
    isSelected,
    assembledPrompt,
    reset,
    selectionCount,
  } = usePromptBuilder();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-none">
                Prompt Builder
              </h1>
              <p className="text-xs text-muted-foreground">
                AI video prompts for Nano Banana & Kling
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left: Categories */}
          <div className="flex-1 min-w-0 space-y-3">
            {PROMPT_CATEGORIES.map((cat) => (
              <PromptSection
                key={cat.id}
                category={cat}
                isSelected={isSelected}
                toggleOption={toggleOption}
                selectedCount={(selections[cat.id] || []).length}
              />
            ))}

            {/* Example Combos */}
            <div className="border border-border rounded-xl bg-card p-4">
              <h3 className="font-semibold text-foreground text-sm mb-3">
                💡 Example Combinations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EXAMPLE_COMBOS.map((ex) => (
                  <div
                    key={ex.name}
                    className="bg-secondary/50 rounded-lg px-3 py-2"
                  >
                    <p className="text-xs font-semibold text-foreground">
                      {ex.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{ex.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Assembled Prompt — desktop */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <AssembledPrompt
                prompt={assembledPrompt()}
                selectionCount={selectionCount}
                onReset={reset}
                platform={platform}
                onPlatformChange={setPlatform}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Fixed bottom prompt */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-xl border-t border-border">
        <AssembledPrompt
          prompt={assembledPrompt()}
          selectionCount={selectionCount}
          onReset={reset}
          platform={platform}
          onPlatformChange={setPlatform}
        />
      </div>

      {/* Bottom padding for mobile fixed bar */}
      <div className="lg:hidden h-64" />
    </div>
  );
};

export default Index;
