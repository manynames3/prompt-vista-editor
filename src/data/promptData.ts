export interface PromptCategory {
  id: string;
  label: string;
  step: number;
  color: string;
  options: string[];
  subcategories?: { label: string; options: string[] }[];
  optional?: boolean;
  platformOnly?: "nanobanana" | "kling";
  halfWidth?: boolean;
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: "subject",
    label: "Subject",
    step: 1,
    color: "primary",
    halfWidth: true,
    options: [
      "Woman walking through a city",
      "Man dancing in a studio",
      "Child playing in a park",
      "Abstract figure",
      "Robot moving",
      "Character in a fantasy setting",
      "Person in an office",
      "Animal in nature",
      "Group of people",
      "Solitary figure",
    ],
  },
  {
    id: "action",
    label: "Action",
    step: 2,
    color: "accent",
    halfWidth: true,
    options: [
      "Walking slowly", "Running fast", "Dancing", "Jumping",
      "Falling", "Rising up", "Turning around", "Looking around",
      "Gesturing", "Standing still", "Interacting with objects", "Climbing",
    ],
  },
  {
    id: "shot",
    label: "Shot Type",
    step: 3,
    color: "primary",
    options: [],
    subcategories: [
      {
        label: "Framing",
        options: ["Extreme close-up", "Close-up", "Medium close-up", "Medium shot", "Full shot", "Wide shot", "Extreme wide shot", "Asymmetrical shot", "Symmetrical shot", "Two shot"],
      },
      {
        label: "Angle",
        options: ["Eye-level", "Low angle", "High angle", "Dutch angle", "Bird's eye view", "Worm's eye view", "Over-the-shoulder", "POV shot", "Underwater shot", "Mirror shot", "Through-the-object shot"],
      },
      {
        label: "Lens",
        options: ["35mm lens", "50mm lens", "85mm portrait lens", "24mm wide angle", "Macro lens", "Fisheye lens", "Anamorphic lens", "Tilt-shift lens"],
      },
      {
        label: "Focus",
        options: ["Shallow depth of field", "Deep focus", "Rack focus", "Soft focus", "Split diopter", "Bokeh background"],
      },
    ],
  },
  {
    id: "setting",
    label: "Setting",
    step: 4,
    color: "accent",
    halfWidth: true,
    options: [
      "Cyberpunk city at night", "Lush forest with golden sunlight",
      "Beach at sunset", "Minimalist white studio",
      "Abandoned warehouse", "Desert landscape",
      "Neon-lit Tokyo alley", "Snowy mountain peak",
      "Futuristic space station", "Cozy café",
      "Ancient temple", "Rooftop overlooking skyline",
    ],
  },
  {
    id: "timeweather",
    label: "Time & Weather",
    step: 5,
    color: "primary",
    halfWidth: true,
    options: [],
    subcategories: [
      {
        label: "Time of Day",
        options: ["Golden hour", "Blue hour", "Midday sun", "Late afternoon", "Dusk", "Dawn", "Midnight", "Pre-dawn"],
      },
      {
        label: "Weather",
        options: ["Clear sky", "Overcast", "Rainy", "Foggy", "Snowing", "Stormy", "Misty", "Windy", "Hazy"],
      },
      {
        label: "Season",
        options: ["Spring freshness", "Summer vibrancy", "Autumn warmth", "Winter crisp"],
      },
    ],
  },
  {
    id: "lighting",
    label: "Lighting",
    step: 6,
    color: "accent",
    halfWidth: true,
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
      "Rim lighting",
      "Backlighting with silhouette",
      "Practical lights only",
      "Chiaroscuro",
      "Dappled light through trees",
      "Fluorescent overhead",
      "Moody lighting",
      "Blue accent tone",
      "Red accent tone",
      "Natural lighting",
      "Black and white",
      "Autochrome",
    ],
  },
  {
    id: "camera",
    label: "Camera Movement",
    step: 7,
    color: "primary",
    options: [],
    subcategories: [
      {
        label: "Push/Pull",
        options: ["Slow push in", "Dramatic push in", "Subtle push in", "Slow pull back", "Cinematic pull back", "Wide reveal pull back"],
      },
      {
        label: "Pan & Tilt",
        options: ["Slow pan left", "Slow pan right", "Cinematic pan left", "Whip pan", "Tilt up", "Tilt down", "Tilt up to reveal the face"],
      },
      {
        label: "Zoom",
        options: ["Slow zoom in", "Slow zoom out", "Dramatic zoom in", "Dolly zoom", "Zoom in on the eyes", "Zoom out to reveal the environment"],
      },
      {
        label: "Orbit & Track",
        options: ["Orbit left around the subject", "Orbit right around the subject", "Tracking shot following the subject", "Side tracking shot", "Smooth arc around the character", "180-degree orbit"],
      },
      {
        label: "Vertical & Special",
        options: ["Crane up", "Crane down", "Rise upward", "Descend slowly", "Overhead rise", "Steadicam floating", "Dutch angle roll"],
      },
      {
        label: "Handheld",
        options: ["Dreamy handheld sway", "Light handheld motion", "Shaky handheld chase shot", "Documentary handheld"],
      },
    ],
  },
  {
    id: "mood",
    label: "Mood & Emotion",
    step: 8,
    color: "accent",
    halfWidth: true,
    options: [
      "Tense", "Peaceful", "Euphoric", "Melancholic", "Mysterious",
      "Heroic", "Romantic", "Nostalgic", "Ominous", "Whimsical",
      "Serene", "Chaotic", "Intimate", "Epic", "Lonely", "Hopeful",
    ],
  },
  {
    id: "colorpalette",
    label: "Color Palette",
    step: 9,
    color: "primary",
    halfWidth: true,
    options: [],
    subcategories: [
      {
        label: "Tone",
        options: ["Warm tones", "Cool tones", "Neutral tones", "Desaturated", "Oversaturated", "Monochrome"],
      },
      {
        label: "Palette",
        options: ["Neon colors", "Pastel palette", "Earth tones", "Jewel tones", "Muted vintage", "High-contrast black & white", "Teal and orange", "Wes Anderson palette"],
      },
    ],
  },
  {
    id: "style",
    label: "Visual Style",
    step: 10,
    color: "accent",
    options: [],
    subcategories: [
      {
        label: "Aesthetic",
        options: ["Photorealistic", "Cinematic", "Animated", "Stylized", "Noir", "Surreal", "Dreamy", "Minimalist", "Vibrant", "Gritty", "Ethereal", "Retro"],
      },
      {
        label: "Film / Photography",
        options: ["Editorial fashion photography", "Documentary style", "Commercial product photography", "Lifestyle photography", "Street photography", "Fine art"],
      },
    ],
  },
  {
    id: "filmstock",
    label: "Film Stock & Tech",
    step: 11,
    color: "primary",
    optional: true,
    options: [],
    subcategories: [
      {
        label: "Film Stock",
        options: ["Kodak Portra 400", "Fuji Velvia", "Kodak Ektar 100", "Ilford HP5", "Cinestill 800T", "Kodachrome"],
      },
      {
        label: "Camera / Rig",
        options: ["Shot on Arri Alexa", "Shot on RED", "Shot on Hasselblad", "Shot on 16mm film", "Shot on Super 8", "iPhone footage", "GoPro mounted", "Drone footage"],
      },
      {
        label: "Post-Processing",
        options: ["Film grain texture", "Clean digital", "VSCO filter", "Desaturated color grade", "Cinematic color grading", "Cross-processed", "Heavy vignette"],
      },
    ],
  },
  {
    id: "motion",
    label: "Motion Intensity",
    step: 12,
    color: "accent",
    optional: true,
    halfWidth: true,
    options: ["Very slow / subtle motion", "Slow gentle motion", "Normal speed", "Fast dynamic motion", "Slow-motion 120fps", "Time-lapse", "Freeze frame moment", "Speed ramping"],
  },
  {
    id: "modifiers",
    label: "Modifiers",
    step: 13,
    color: "primary",
    optional: true,
    halfWidth: true,
    options: ["slow", "subtle", "smooth", "cinematic", "dramatic", "gentle", "floating", "handheld", "controlled", "steady", "dynamic", "fast", "elegant", "raw", "polished", "organic"],
  },
  {
    id: "aspectratio",
    label: "Aspect Ratio",
    step: 14,
    color: "accent",
    optional: true,
    halfWidth: true,
    options: ["16:9 widescreen", "9:16 vertical / TikTok", "1:1 square", "4:3 classic", "21:9 ultrawide / cinematic", "4:5 Instagram portrait", "2.39:1 anamorphic"],
  },
  {
    id: "audio",
    label: "Audio & Sound",
    step: 15,
    color: "primary",
    optional: true,
    platformOnly: "kling",
    options: [],
    subcategories: [
      {
        label: "Ambient",
        options: ["City traffic ambience", "Nature sounds / birds", "Rain and thunder", "Ocean waves", "Wind howling", "Crowd chatter", "Silent / no sound", "Industrial hum"],
      },
      {
        label: "Music Mood",
        options: ["Epic orchestral score", "Gentle piano", "Synthwave beat", "Lo-fi hip hop", "Dramatic tension strings", "Upbeat pop energy", "Ambient electronic"],
      },
      {
        label: "Voice",
        options: ["Deep raspy voice", "Soft whisper", "Energetic narration", "Calm narrator", "Child voice", "Robotic voice"],
      },
    ],
  },
  {
    id: "negative",
    label: "Negative Prompt",
    step: 16,
    color: "accent",
    optional: true,
    halfWidth: true,
    options: [
      "No morphing artifacts",
      "No face distortion",
      "No blurry frames",
      "No text overlays",
      "No watermarks",
      "No sudden camera jumps",
      "No extra limbs",
      "No flickering",
      "Avoid static shots",
      "No low resolution",
    ],
  },
];

export const EXAMPLE_COMBOS = [
  { name: "Cinematic Reveal", desc: "Slow push in, cinematic lighting, Arri Alexa, 21:9 ultrawide" },
  { name: "Dynamic Character Study", desc: "Smooth orbit, shallow DoF, 85mm portrait lens, golden hour" },
  { name: "Action Sequence", desc: "Tracking shot from behind, handheld, speed ramping, tense mood" },
  { name: "Epic Environment", desc: "Drone footage, zoom out to reveal, wide shot, epic orchestral" },
  { name: "Emotional Close-up", desc: "Slow zoom in on eyes, warm amber tones, Kodak Portra 400" },
  { name: "Noir Mystery", desc: "Dutch angle, high contrast B&W, low key lighting, ominous" },
];
