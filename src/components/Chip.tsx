import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 border",
        "cursor-pointer select-none text-center break-words",
        active
          ? "bg-chip-active text-chip-active-foreground border-chip-active glow-primary"
          : "bg-chip text-secondary-foreground border-border hover:bg-chip-hover hover:border-muted-foreground/30"
      )}
    >
      {label}
    </button>
  );
}
