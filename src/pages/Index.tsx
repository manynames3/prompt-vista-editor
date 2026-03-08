import { useState } from "react";
import { PROMPT_CATEGORIES, EXAMPLE_COMBOS } from "@/data/promptData";
import { NICHE_TEMPLATES } from "@/data/nicheTemplates";
import { usePromptBuilder } from "@/hooks/usePromptBuilder";
import { PromptSection } from "@/components/PromptSection";
import { AssembledPrompt } from "@/components/AssembledPrompt";
import { NicheCard } from "@/components/NicheCard";
import { StoryboardBuilder } from "@/components/StoryboardBuilder";
import { Zap, Layers, Blocks, Clapperboard } from "lucide-react";
import { cn } from "@/lib/utils";

type TabId = "builder" | "specialty" | "storyboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("builder");
  const {
    selections,
    platform,
    setPlatform,
    toggleOption,
    isSelected,
    assembledPrompt,
    reset,
    selectionCount,
    customPrompt,
    setCustomPrompt,
    applyNichePrompt,
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
                PromptBoard
              </h1>
              <p className="text-xs text-muted-foreground">
                AI video prompts & storyboards for Nano Banana & Kling
              </p>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center bg-secondary rounded-lg p-0.5">
            <button
              onClick={() => setActiveTab("builder")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                activeTab === "builder"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Blocks className="w-3.5 h-3.5" />
              Builder
            </button>
            <button
              onClick={() => setActiveTab("storyboard")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                activeTab === "storyboard"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Clapperboard className="w-3.5 h-3.5" />
              Storyboard
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                activeTab === "specialty"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              Niches
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left: Content */}
          <div className="flex-1 min-w-0 space-y-3">
            {activeTab === "builder" ? (
              <>
                {/* Custom prompt indicator */}
                {customPrompt && (
                  <div className="border border-primary/30 rounded-xl bg-primary/5 p-3 flex items-center justify-between">
                    <p className="text-xs text-primary font-medium">
                      ✨ Using a specialty niche prompt — edit below or reset to use the builder
                    </p>
                    <button
                      onClick={() => setCustomPrompt("")}
                      className="text-xs text-muted-foreground hover:text-foreground underline"
                    >
                      Clear & use builder
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {PROMPT_CATEGORIES
                    .filter((cat) => !cat.platformOnly || cat.platformOnly === platform)
                    .map((cat) => (
                    <div key={cat.id} className={cat.halfWidth ? "" : "md:col-span-2"}>
                      <PromptSection
                        category={cat}
                        isSelected={isSelected}
                        toggleOption={toggleOption}
                        selectedCount={(selections[cat.id] || []).length}
                      />
                    </div>
                  ))}
                </div>

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
              </>
            ) : activeTab === "storyboard" ? (
              <StoryboardBuilder />
            ) : (
              <>
                <div className="mb-2">
                  <h2 className="text-lg font-bold text-foreground">Specialty Niches</h2>
                  <p className="text-sm text-muted-foreground">
                    Pre-built prompts for popular content niches. Click "Use" to load into the builder.
                  </p>
                </div>
                <div className="space-y-3">
                  {NICHE_TEMPLATES.map((niche) => (
                    <NicheCard
                      key={niche.id}
                      niche={niche}
                      onApplyPrompt={(prompt) => {
                        applyNichePrompt(prompt);
                        setActiveTab("builder");
                      }}
                    />
                  ))}
                </div>
              </>
            )}
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
