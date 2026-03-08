export interface NicheTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  presets: { label: string; prompt: string }[];
}

export const NICHE_TEMPLATES: NicheTemplate[] = [
  {
    id: "home-restoration",
    name: "Home Restoration",
    icon: "🏚️",
    description: "Before/after reveals, repair processes, transformation timelapses",
    presets: [
      { label: "Before/After Reveal", prompt: "Slow cinematic push in on a deteriorated room with peeling wallpaper and broken floors, then smooth transition revealing the same room fully restored with fresh paint, hardwood floors, and modern furnishings, golden hour light streaming through clean windows, photorealistic, 16:9 widescreen" },
      { label: "Wall Repair Process", prompt: "Close-up tracking shot of hands patching and plastering a damaged wall, dust particles floating in volumetric light rays, timelapse of sanding and painting, shallow depth of field, warm amber tones, documentary style" },
      { label: "Floor Restoration Timelapse", prompt: "Bird's eye view timelapse of old scratched hardwood floor being sanded, stained, and polished to a mirror finish, dramatic before and after, cinematic lighting, steady controlled camera, satisfying transformation" },
      { label: "Kitchen Renovation", prompt: "Wide shot of a gutted kitchen with exposed studs, smooth timelapse transition to a modern kitchen with marble countertops and stainless steel appliances, crane shot rising to reveal the full space, bright natural lighting, photorealistic" },
      { label: "Exterior Transformation", prompt: "Drone footage slow pull back from a weathered house exterior with chipped paint and overgrown yard, dissolve transition to the same house freshly painted with manicured landscaping, golden hour glow, epic reveal, cinematic color grading" },
      { label: "Detail Sanding Close-up", prompt: "Extreme close-up macro lens shot of sandpaper smoothing old wood grain, sawdust particles catching the light, shallow depth of field, ASMR-style satisfying motion, warm tones, slow motion 120fps" },
    ],
  },
  {
    id: "home-renovation",
    name: "Home Renovation",
    icon: "🏗️",
    description: "Construction progress, design walkthroughs, room makeovers",
    presets: [
      { label: "Room Makeover Reveal", prompt: "Steadicam floating walkthrough of an empty room, smooth 360-degree orbit revealing new furniture, decor, and lighting being placed in stop-motion style, warm ambient lighting, modern interior design, cinematic, 16:9" },
      { label: "Blueprint to Reality", prompt: "Close-up of architectural blueprints on a table, camera tilts up and pushes forward through the paper into a photorealistic 3D render of the finished room, seamless transition, clean digital look, dramatic lighting" },
      { label: "Demolition Day", prompt: "Dynamic handheld tracking shot of sledgehammer breaking through drywall, debris and dust exploding in slow motion, dramatic side lighting, gritty documentary style, fast dynamic motion, wide angle lens" },
      { label: "Paint Color Comparison", prompt: "Split-screen style smooth pan across a wall showing three different paint colors blending into each other, soft diffused natural light, medium shot, clean minimalist aesthetic, satisfying color transitions" },
      { label: "Bathroom Tile Install", prompt: "Overhead bird's eye view of hands carefully placing mosaic tiles in a geometric pattern, gentle controlled motion, satisfying alignment, soft warm lighting, extreme close-up details, time-lapse progression" },
      { label: "Full Home Walkthrough", prompt: "Smooth steadicam walkthrough of a fully renovated home, gliding from room to room through doorways, golden hour light, shallow depth of field, cinematic color grading, shot on Arri Alexa, 21:9 ultrawide" },
    ],
  },
  {
    id: "storybook",
    name: "Children's Storybook",
    icon: "📖",
    description: "Illustrated pages, character animations, whimsical scenes",
    presets: [
      { label: "Page Turn Reveal", prompt: "Close-up of a storybook page turning to reveal a colorful watercolor illustration of a fox in a magical forest, the illustration gently animates with leaves floating and fireflies glowing, warm soft lighting, whimsical, dreamy, pastel palette" },
      { label: "Character Introduction", prompt: "A cute illustrated bear character in a red scarf steps out from behind a giant mushroom in an enchanted forest, hand-painted watercolor style, gentle floating camera, soft diffused light, children's book aesthetic, vibrant colors" },
      { label: "Bedtime Scene", prompt: "Illustrated cozy bedroom with a child tucked in bed, stars twinkling outside the window slowly animate, a friendly moon smiles, warm amber glow from a nightlight, gentle subtle motion, storybook watercolor style, peaceful serene mood" },
      { label: "Adventure Map", prompt: "Bird's eye view of a hand-drawn treasure map with dotted paths, mountains, and a castle, camera slowly pans across the map as illustrated elements subtly animate — waves ripple, trees sway, a tiny ship moves along the coast, vintage paper texture, whimsical" },
      { label: "Forest Friends Gathering", prompt: "Wide shot of woodland animals gathering in a sunlit meadow clearing, illustrated in soft pastel watercolors, butterflies float across frame, dappled light through trees, gentle pan right revealing each character, children's book style, warm hopeful mood" },
      { label: "Magic Spell Effect", prompt: "Close-up of an illustrated child's hands opening a glowing book, sparkles and swirling golden particles rise from the pages, magical transformation of the background from grey to vibrant colors, dreamy ethereal style, slow cinematic zoom in" },
    ],
  },
  {
    id: "cookbook",
    name: "Cookbook & Recipe Pages",
    icon: "🍳",
    description: "Recipe layouts with annotations, step arrows, ingredient callouts",
    presets: [
      { label: "Recipe Page with Arrows", prompt: "Top-down flat lay of a beautifully styled recipe page layout, annotated arrows pointing from ingredients to their placement in the dish, clean white background, editorial food photography style, soft diffused overhead lighting, minimalist, 4:5 Instagram portrait" },
      { label: "Step-by-Step Process", prompt: "Overhead bird's eye view of cooking steps arranged in a grid: raw ingredients, mixing bowl, chopping, cooking in pan, final plated dish. Numbered circles and curved arrows connecting each step, clean food photography, bright natural lighting, editorial style" },
      { label: "Ingredient Breakdown", prompt: "Flat lay of recipe ingredients neatly arranged on marble countertop with hand-lettered labels and measurement annotations next to each item, arrows pointing to key ingredients, clean commercial food photography, bright even lighting, minimalist design" },
      { label: "Cooking Action Shot", prompt: "Close-up of a chef's hands tossing vegetables in a hot wok, flames rising, steam and oil droplets frozen in mid-air, dramatic side lighting, slow motion 120fps, shallow depth of field, cinematic food photography, warm amber tones" },
      { label: "Plating Diagram", prompt: "Overhead shot of an empty white plate with animated dotted lines and arrows showing where each component should be placed, then each element appears — protein center, sauce swoosh left, garnish top right — clean editorial style, soft lighting" },
      { label: "Before/After Cooking", prompt: "Split composition: left side shows raw ingredients beautifully arranged, right side shows the finished plated dish, smooth slow pan from raw to cooked, steam rising from the finished plate, warm golden lighting, photorealistic food photography" },
    ],
  },
  {
    id: "photography-setup",
    name: "Photography Setup Guides",
    icon: "📸",
    description: "Lighting diagrams, equipment breakdowns, setup explanations with annotations",
    presets: [
      { label: "Lighting Diagram with Arrows", prompt: "Top-down diagram view of a photography studio setup, arrows showing light direction from softbox to subject, fill light angles marked with dotted lines, camera position indicated, clean minimal illustration style overlaid on photorealistic scene, educational, bright even lighting" },
      { label: "3-Point Lighting Explained", prompt: "Medium wide shot of a portrait photography setup with three lights visible — key light, fill light, rim light — each with animated glowing arrows showing their direction and purpose, labels floating next to each light, clean studio, educational style" },
      { label: "Camera Settings Overlay", prompt: "Close-up of a DSLR camera display showing settings, pull back to reveal the full studio setup with annotated text overlays: aperture f/2.8, shutter 1/200, ISO 400, arrows pointing from settings to their visual effect on the subject, clean modern design" },
      { label: "Gear Flat Lay Breakdown", prompt: "Overhead flat lay of photography equipment — camera body, three lenses, flash, reflector, memory cards — neatly arranged on dark surface with labeled annotations and arrows pointing to each item, clean editorial style, soft even lighting, 16:9" },
      { label: "Before/After Edit Comparison", prompt: "Split screen of the same portrait photo: left side straight out of camera (flat, unedited), right side professionally retouched with enhanced colors and skin, animated slider revealing the difference, clean UI overlay, photography tutorial style" },
      { label: "Backdrop & Modifier Demo", prompt: "Smooth tracking shot moving past a row of different photography backdrops and light modifiers — seamless paper, muslin, softbox, umbrella, beauty dish — each with a sample portrait result shown beside it, clean studio, educational walkthrough, steady controlled camera" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate Tours",
    icon: "🏠",
    description: "Property walkthroughs, aerial reveals, room showcases",
    presets: [
      { label: "Aerial Property Reveal", prompt: "Drone footage ascending from the front lawn of a luxury home, pulling back to reveal the full property with pool, landscaping, and surrounding neighborhood, golden hour glow, cinematic pull back, 16:9 widescreen, photorealistic" },
      { label: "Interior Walkthrough", prompt: "Smooth steadicam floating walkthrough from the front door through the living room, kitchen, and out to the backyard, natural light streaming through windows, shallow depth of field, real estate photography style, warm inviting tones" },
      { label: "Room Showcase Orbit", prompt: "Slow 180-degree orbit around a staged living room, highlighting the fireplace, built-in shelving, and large windows, soft diffused natural light, medium wide shot, clean modern aesthetic, cinematic color grading" },
      { label: "Neighborhood Context", prompt: "Drone footage wide establishing shot of the neighborhood, slow push toward the featured property, text overlay showing address, then transition to interior, clean professional real estate style, bright clear day" },
    ],
  },
  {
    id: "product-showcase",
    name: "Product Showcase",
    icon: "🛍️",
    description: "Product reveals, 360° spins, feature callouts",
    presets: [
      { label: "Hero Product Reveal", prompt: "Dramatic slow push in on a product centered on a minimal pedestal, volumetric light rays from behind creating a halo effect, the product slowly rotates, shallow depth of field, dark moody background, commercial photography style, cinematic" },
      { label: "360° Product Spin", prompt: "Smooth continuous orbit around a product on a white seamless background, even studio lighting, full 360-degree rotation, clean commercial style, subtle shadow underneath, photorealistic, 1:1 square format" },
      { label: "Feature Callout Zoom", prompt: "Start wide on a tech product, then dramatic zoom into a specific feature detail with animated annotation arrows and text labels appearing, macro lens extreme close-up of texture and materials, clean modern design, bright studio lighting" },
      { label: "Unboxing Sequence", prompt: "Close-up overhead shot of hands opening a premium packaging box, tissue paper parting to reveal the product inside, slow controlled motion, soft warm lighting, ASMR-style satisfying reveal, shallow depth of field, commercial style" },
    ],
  },
  {
    id: "fitness-wellness",
    name: "Fitness & Wellness",
    icon: "💪",
    description: "Exercise demos, form guides, wellness content",
    presets: [
      { label: "Exercise Form Guide", prompt: "Medium shot of an athlete performing a squat with proper form, slow motion showing the full range of motion, annotated arrows showing knee alignment and back angle, clean gym background, bright even lighting, educational fitness style" },
      { label: "Workout Montage", prompt: "Dynamic fast-cut montage of different exercises — push-ups, burpees, kettlebell swings — tracking shots following the athlete, energetic motion, dramatic lighting with rim light, high contrast, cinematic, fast dynamic motion" },
      { label: "Yoga Flow Sequence", prompt: "Wide shot of a person flowing through yoga poses on a mat at sunrise, smooth gentle transitions between poses, golden hour light, serene peaceful mood, soft warm tones, slow controlled motion, outdoor natural setting" },
      { label: "Muscle Anatomy Overlay", prompt: "Side view of an athlete doing a bicep curl, semi-transparent anatomical overlay showing the muscles engaged with glowing highlights and arrows, clean studio background, educational style, medium shot, slow motion" },
    ],
  },
  {
    id: "education",
    name: "Educational Content",
    icon: "🎓",
    description: "Explainers, diagrams, step-by-step tutorials",
    presets: [
      { label: "Whiteboard Explainer", prompt: "Close-up of a hand drawing a diagram on a whiteboard with colored markers, arrows and labels appearing as the drawing progresses, clean bright lighting, educational style, medium close-up, steady controlled camera, time-lapse drawing" },
      { label: "Science Visualization", prompt: "Cinematic macro zoom into a drop of water hitting a surface, then transitioning into a molecular-level visualization of water molecules interacting, surreal scientific aesthetic, volumetric lighting, dramatic zoom in, educational" },
      { label: "Timeline Animation", prompt: "Smooth pan across an illustrated timeline from left to right, historical events and dates appearing with connecting arrows and illustrations, vintage paper texture background, gentle controlled motion, educational editorial style" },
      { label: "Process Flow Diagram", prompt: "Animated top-down view of a flowchart with boxes and arrows lighting up sequentially showing a step-by-step process, clean minimal design, bright even lighting, modern infographic style, smooth controlled animation" },
    ],
  },
];
