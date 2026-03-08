import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Curated scene-specific chips — only what's actually useful per-scene
const SCENE_CHIP_CATEGORIES = [
  {
    id: "shot",
    label: "Shot",
    groups: [
      {
        label: "Framing",
        options: ["Close-up", "Medium shot", "Wide shot", "Extreme close-up", "Full shot", "Two shot", "Over-the-shoulder"],
      },
      {
        label: "Angle",
        options: ["Eye-level", "Low angle", "High angle", "Dutch angle", "Bird's eye view", "POV shot"],
      },
      {
        label: "Lens & Focus",
        options: ["85mm portrait lens", "35mm lens", "24mm wide angle", "Shallow depth of field", "Deep focus", "Bokeh background"],
      },
    ],
  },
  {
    id: "camera",
    label: "Camera",
    groups: [
      {
        label: "Push / Pull",
        options: ["Slow push in", "Dramatic push in", "Slow pull back", "Wide reveal pull back"],
      },
      {
        label: "Pan & Tilt",
        options: ["Slow pan left", "Slow pan right", "Whip pan", "Tilt up", "Tilt down"],
      },
      {
        label: "Orbit & Track",
        options: ["Orbit around subject", "Tracking shot following subject", "Side tracking", "Smooth arc"],
      },
      {
        label: "Zoom & Vertical",
        options: ["Slow zoom in", "Slow zoom out", "Dolly zoom", "Crane up", "Crane down", "Drone rise"],
      },
      {
        label: "Handheld",
        options: ["Steadicam floating", "Light handheld motion", "Documentary handheld"],
      },
    ],
  },
  {
    id: "lighting",
    label: "Lighting",
    groups: [
      {
        label: "Style",
        options: ["Cinematic lighting", "Golden hour glow", "Neon glow", "Soft diffused light", "Hard dramatic shadows", "Volumetric light rays", "Rim lighting", "Backlighting", "Low key", "Natural lighting"],
      },
      {
        label: "Tone",
        options: ["Warm amber tones", "Cool blue tones", "High contrast", "Moody lighting", "Black and white"],
      },
    ],
  },
  {
    id: "setting",
    label: "Setting",
    groups: [
      {
        label: "Location",
        options: ["Modern studio", "Urban street", "Rooftop", "Forest", "Beach", "Desert", "Interior room", "Warehouse", "Café"],
      },
      {
        label: "Time & Weather",
        options: ["Golden hour", "Blue hour", "Midday", "Night", "Foggy", "Rainy", "Overcast", "Snowing"],
      },
    ],
  },
  {
    id: "mood",
    label: "Mood",
    groups: [
      {
        label: "Emotion",
        options: ["Tense", "Peaceful", "Euphoric", "Melancholic", "Mysterious", "Heroic", "Romantic", "Nostalgic", "Ominous", "Epic", "Intimate"],
      },
    ],
  },
  {
    id: "motion",
    label: "Motion",
    groups: [
      {
        label: "Speed",
        options: ["Slow motion 120fps", "Very slow / subtle", "Normal speed", "Fast dynamic", "Speed ramping", "Time-lapse", "Freeze frame"],
      },
      {
        label: "Quality",
        options: ["Cinematic", "Smooth", "Dramatic", "Gentle", "Raw", "Elegant", "Organic"],
      },
    ],
  },
  {
    id: "style",
    label: "Style",
    groups: [
      {
        label: "Look",
        options: ["Photorealistic", "Cinematic", "Noir", "Surreal", "Dreamy", "Minimalist", "Gritty", "Retro"],
      },
      {
        label: "Technical",
        options: ["Shot on Arri Alexa", "Kodak Portra 400", "Film grain", "Cinematic color grading", "Anamorphic lens", "16mm film"],
      },
    ],
  },
];

interface SceneChipPickerProps {
  onInsert: (text: string) => void;
}

export function SceneChipPicker({ onInsert }: SceneChipPickerProps) {
  const [open, setOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("shot");

  const active = SCENE_CHIP_CATEGORIES.find((c) => c.id === activeCategory) || SCENE_CHIP_CATEGORIES[0];

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
            {SCENE_CHIP_CATEGORIES.map((cat) => (
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
          <div className="max-h-36 overflow-y-auto scrollbar-thin space-y-2">
            {active.groups.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1">
                  {group.options.map((opt) => (
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
