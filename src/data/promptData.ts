export interface PromptCategory {
  id: string;
  label: string;
  step: number;
  color: string;
  options: string[];
  subcategories?: { label: string; options: string[] }[];
  optional?: boolean;
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: "subject",
    label: "Subject",
    step: 1,
    color: "primary",
    options: [
      "A woman walking through a city",
      "A man dancing in a studio",
      "A child playing in a park",
      "An abstract figure",
      "A robot moving",
      "A character in a fantasy setting",
      "A person in an office",
      "An animal in nature",
      "A group of people",
      "A solitary figure",
    ],
  },
  {
    id: "action",
    label: "Action",
    step: 2,
    color: "accent",
    options: [
      "Walking slowly",
      "Running fast",
      "Dancing",
      "Jumping",
      "Falling",
      "Rising up",
      "Turning around",
      "Looking around",
      "Gesturing",
      "Standing still",
      "Interacting with objects",
      "Climbing",
    ],
  },
  {
    id: "setting",
    label: "Setting",
    step: 3,
    color: "primary",
    options: [
      "Cyberpunk city at night",
      "Lush forest with golden sunlight",
      "Minimalist white studio",
      "Abandoned warehouse",
      "Beach at sunset",
      "Futuristic space station",
      "Ancient temple",
      "Modern office building",
      "Desert landscape",
      "Underwater environment",
    ],
  },
  {
    id: "lighting",
    label: "Lighting",
    step: 4,
    color: "accent",
    options: [
      "Cinematic lighting",
      "Golden hour glow",
      "Neon glow",
      "Soft diffused light",
      "Hard dramatic shadows",
      "Volumetric light rays",
      "Cool blue tones",
      "Warm amber tones",
      "High contrast",
      "Low key lighting",
    ],
  },
  {
    id: "camera",
    label: "Camera",
    step: 5,
    color: "primary",
    options: [],
    subcategories: [
      {
        label: "Push/Pull",
        options: ["Slow push in", "Dramatic push in", "Subtle push in", "Slow pull back", "Cinematic pull back", "Wide reveal pull back"],
      },
      {
        label: "Pan & Tilt",
        options: ["Slow pan left", "Slow pan right", "Cinematic pan left", "Tilt up", "Tilt down", "Tilt up to reveal the face"],
      },
      {
        label: "Zoom",
        options: ["Slow zoom in", "Slow zoom out", "Dramatic zoom in", "Zoom in on the eyes", "Zoom out to reveal the environment"],
      },
      {
        label: "Orbit & Track",
        options: ["Orbit left around the subject", "Orbit right around the subject", "Tracking shot following the subject", "Side tracking shot", "Smooth arc around the character"],
      },
      {
        label: "Vertical",
        options: ["Crane up", "Crane down", "Rise upward", "Descend slowly", "Overhead rise"],
      },
      {
        label: "Handheld",
        options: ["Dreamy handheld sway", "Light handheld motion", "Shaky handheld chase shot"],
      },
    ],
  },
  {
    id: "modifiers",
    label: "Modifiers",
    step: 6,
    color: "accent",
    optional: true,
    options: ["slow", "subtle", "smooth", "cinematic", "dramatic", "gentle", "floating", "handheld", "controlled", "steady", "dynamic", "fast"],
  },
  {
    id: "style",
    label: "Style",
    step: 7,
    color: "primary",
    optional: true,
    options: ["Photorealistic", "Cinematic", "Animated", "Stylized", "Noir", "Surreal", "Dreamy", "High contrast", "Minimalist", "Vibrant"],
  },
];

export const EXAMPLE_COMBOS = [
  { name: "Cinematic Reveal", desc: "Slow push in, cinematic lighting" },
  { name: "Dynamic Character Study", desc: "Smooth orbit right around the subject" },
  { name: "Action Sequence", desc: "Tracking shot from behind, slight handheld motion" },
  { name: "Epic Environment", desc: "Zoom out to reveal the full environment" },
  { name: "Emotional Close-up", desc: "Slow zoom in on the eyes, warm golden lighting" },
  { name: "Following Action", desc: "Tracking shot following the subject, dynamic motion" },
];
