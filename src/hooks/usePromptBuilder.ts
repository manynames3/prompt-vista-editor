import { useState, useCallback } from "react";

export type Selections = Record<string, string[]>;

export function usePromptBuilder() {
  const [selections, setSelections] = useState<Selections>({});
  const [platform, setPlatform] = useState<"nanobanana" | "kling">("nanobanana");
  const [customPrompt, setCustomPrompt] = useState("");

  const toggleOption = useCallback((categoryId: string, option: string) => {
    setSelections((prev) => {
      const current = prev[categoryId] || [];
      const exists = current.includes(option);
      return {
        ...prev,
        [categoryId]: exists
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  }, []);

  const isSelected = useCallback(
    (categoryId: string, option: string) =>
      (selections[categoryId] || []).includes(option),
    [selections]
  );

  const assembledPrompt = useCallback(() => {
    if (customPrompt) return customPrompt;
    const order = [
      "subject", "action", "shot", "setting", "timeweather",
      "lighting", "camera", "mood", "colorpalette", "style",
      "filmstock", "motion", "modifiers", "render", "aspectratio", "audio", "negative",
    ];
    const parts: string[] = [];
    for (const key of order) {
      const vals = selections[key];
      if (vals && vals.length > 0) {
        if (key === "negative") {
          parts.push("Avoid: " + vals.join(", "));
        } else {
          parts.push(vals.join(", "));
        }
      }
    }
    return parts.join(". ") + (parts.length ? "." : "");
  }, [selections, customPrompt]);

  const reset = useCallback(() => {
    setSelections({});
    setCustomPrompt("");
  }, []);

  const applyNichePrompt = useCallback((prompt: string) => {
    setSelections({});
    setCustomPrompt(prompt);
  }, []);

  const selectionCount = customPrompt
    ? 1
    : Object.values(selections).reduce((sum, arr) => sum + arr.length, 0);

  return {
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
  };
}
