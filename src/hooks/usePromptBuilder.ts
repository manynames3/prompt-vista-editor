import { useState, useCallback } from "react";

export type Selections = Record<string, string[]>;

export function usePromptBuilder() {
  const [selections, setSelections] = useState<Selections>({});
  const [platform, setPlatform] = useState<"nanobanana" | "kling">("nanobanana");

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
    const order = ["subject", "action", "setting", "lighting", "camera", "modifiers", "style"];
    const parts: string[] = [];
    for (const key of order) {
      const vals = selections[key];
      if (vals && vals.length > 0) {
        parts.push(vals.join(", "));
      }
    }
    return parts.join(". ") + (parts.length ? "." : "");
  }, [selections]);

  const reset = useCallback(() => setSelections({}), []);

  const selectionCount = Object.values(selections).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  return {
    selections,
    platform,
    setPlatform,
    toggleOption,
    isSelected,
    assembledPrompt,
    reset,
    selectionCount,
  };
}
