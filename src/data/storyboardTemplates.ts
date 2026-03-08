export interface StoryboardTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  scenes: {
    title: string;
    startFrame: string;
    endFrame: string;
    motion: string;
    duration: string;
  }[];
}

export const STORYBOARD_TEMPLATES: StoryboardTemplate[] = [
  {
    id: "home-restoration",
    name: "Home Restoration Before/After",
    icon: "🏚️",
    description: "Dramatic before-and-after transformation of a room or exterior",
    scenes: [
      {
        title: "Establishing Shot — Before",
        startFrame: "Wide shot of a run-down living room with peeling wallpaper, stained carpet, broken ceiling tiles, dim natural light through dirty windows, photorealistic, editorial photography, 16:9",
        endFrame: "Same wide shot angle, camera slowly revealing more of the damaged room, dust particles in light beams, shallow depth of field on peeling paint detail, photorealistic, 16:9",
        motion: "Slow pan right across the damaged room, cinematic lighting, dust particles floating in light beams, melancholic mood, gentle handheld sway",
        duration: "4s",
      },
      {
        title: "Detail Montage — Damage",
        startFrame: "Extreme close-up of cracked plaster wall with water damage stains, macro lens, shallow depth of field, cool blue desaturated tones, photorealistic, 16:9",
        endFrame: "Close-up of a hand in work gloves pulling away old wallpaper to reveal fresh drywall underneath, warm amber side lighting, photorealistic, 16:9",
        motion: "Quick cuts between damage details: cracked wall, broken tile, rusty fixture. Speed ramping from slow to fast, dramatic tension strings, tense mood",
        duration: "3s",
      },
      {
        title: "Transformation Reveal",
        startFrame: "Black screen fading into a blurred out-of-focus warm glow, abstract shapes suggesting a room interior, soft golden light, 16:9",
        endFrame: "Wide shot of the same living room fully renovated — fresh white walls, hardwood floors, modern furniture, golden hour light streaming through clean windows, warm tones, photorealistic, editorial interior photography, 16:9",
        motion: "Rack focus from blurred to sharp revealing the renovated room, slow push in, volumetric golden hour light rays, euphoric mood, epic orchestral swell, cinematic",
        duration: "5s",
      },
      {
        title: "Hero Detail Shots",
        startFrame: "Medium close-up of a styled bookshelf with plants and decorative objects in the renovated room, 85mm portrait lens, shallow depth of field, warm amber tones, photorealistic, 16:9",
        endFrame: "Overhead bird's eye view of the entire renovated room showing the complete floor plan and furniture layout, clean digital, bright and airy, photorealistic, 16:9",
        motion: "Smooth orbit around the room showcasing details, crane up to overhead view, peaceful mood, gentle piano, cinematic color grading",
        duration: "5s",
      },
    ],
  },
  {
    id: "home-renovation-process",
    name: "Home Renovation Process",
    icon: "🔨",
    description: "Step-by-step construction and renovation documentation",
    scenes: [
      {
        title: "Blueprint Planning",
        startFrame: "Overhead shot of architectural blueprints spread on a wooden workbench, pencil and ruler alongside, warm workshop lighting, shallow depth of field, photorealistic, 16:9",
        endFrame: "Same overhead angle but a hand is pointing at a specific section of the blueprint with renovation notes and red markings, warm tones, photorealistic, 16:9",
        motion: "Slow zoom in on the blueprint details, tilt down from face to hands, warm amber tones, focused mood, gentle ambient music",
        duration: "4s",
      },
      {
        title: "Demolition Phase",
        startFrame: "Medium shot of a worker with sledgehammer raised, about to strike a wall, hard dramatic side lighting, dust in the air, gritty aesthetic, photorealistic, 16:9",
        endFrame: "Same angle — wall partially demolished with debris falling, dynamic motion blur on falling pieces, volumetric dust clouds lit by work lights, photorealistic, 16:9",
        motion: "Speed ramping — slow motion sledgehammer impact then fast debris falling, shaky handheld, dramatic mood, industrial ambient sound, high contrast",
        duration: "3s",
      },
      {
        title: "Construction Timelapse",
        startFrame: "Wide shot of stripped-down room with exposed studs and subfloor, work lights illuminating the space, cool blue tones, clean digital, photorealistic, 16:9",
        endFrame: "Same wide angle — room now with new drywall installed, primed white, new window frames in place, brighter natural light, warmer tones, photorealistic, 16:9",
        motion: "Time-lapse style with workers appearing and disappearing, walls going up in fast motion, dynamic energy, upbeat mood, fast dynamic motion",
        duration: "5s",
      },
      {
        title: "Finishing Touches",
        startFrame: "Close-up of a paintbrush applying fresh white paint to a wall in smooth strokes, shallow depth of field, satisfying texture, warm soft lighting, photorealistic, 16:9",
        endFrame: "Pull back to medium shot showing the freshly painted room with new fixtures being installed, golden hour light, hopeful mood, photorealistic, 16:9",
        motion: "Slow pull back revealing the transformation, smooth steadicam, warm amber tones, hopeful mood, gentle piano melody, cinematic",
        duration: "4s",
      },
    ],
  },
  {
    id: "storybook-illustration",
    name: "Children's Storybook",
    icon: "📖",
    description: "Animated storybook pages with illustrations coming to life",
    scenes: [
      {
        title: "Book Opening",
        startFrame: "Close-up of a vintage children's storybook cover with ornate gold lettering on a wooden table, warm candlelight glow, cozy atmosphere, watercolor illustration style, soft focus edges, 16:9",
        endFrame: "The storybook is now open to the first page showing a painted illustration of a cottage in a magical forest, soft warm light emanating from the page, watercolor style, 16:9",
        motion: "Slow zoom in on book cover, then book magically opens with pages fluttering, camera pushes into the illustration, whimsical mood, gentle music box melody",
        duration: "5s",
      },
      {
        title: "Character Introduction",
        startFrame: "Full page watercolor illustration of a small fox character standing at the edge of a glowing enchanted forest, storybook style, soft pastel palette, gentle lighting, hand-painted texture, 16:9",
        endFrame: "Same illustration but the fox has turned to look at the viewer with curious eyes, subtle wind moving the painted leaves, magical sparkles around the character, watercolor style, 16:9",
        motion: "Subtle parallax movement bringing the illustration to life — leaves sway, fox blinks and turns head, magical particles drift, dreamy mood, very slow gentle motion",
        duration: "4s",
      },
      {
        title: "Adventure Scene",
        startFrame: "Double-page spread watercolor illustration of the fox crossing a stone bridge over a sparkling stream, lush forest backdrop, dappled sunlight, storybook style, warm palette, 16:9",
        endFrame: "Fox has reached the other side of the bridge, looking up at a towering ancient tree with a glowing door in its trunk, magical atmosphere, watercolor style, 16:9",
        motion: "Slow tracking shot following the fox across the bridge, parallax layers of trees moving at different speeds, whimsical mood, gentle orchestral, dreamy",
        duration: "5s",
      },
      {
        title: "Page Turn & Ending",
        startFrame: "The illustrated page with the fox entering the tree door, warm golden glow emanating from the doorway, watercolor style, magical sparkles, 16:9",
        endFrame: "Close-up of the storybook closing gently on the wooden table, a small golden glow escaping from between the pages, warm candlelight, cozy atmosphere, 16:9",
        motion: "Slow pull back from illustration, page magically turns, book gently closes with sparkle effects, nostalgic mood, music box winding down, gentle fade",
        duration: "5s",
      },
    ],
  },
  {
    id: "cookbook-recipe",
    name: "Cookbook Recipe Page",
    icon: "🍳",
    description: "Recipe demonstration with annotated steps and ingredient callouts",
    scenes: [
      {
        title: "Recipe Page Overview",
        startFrame: "Overhead bird's eye shot of an open cookbook on a marble counter surrounded by fresh ingredients arranged in small bowls, styled food photography, bright natural light, clean and appetizing, editorial style, 16:9",
        endFrame: "Same overhead angle with illustrated arrows and labels appearing next to each ingredient bowl identifying them — annotated diagram style overlaid on the photo, clean design, 16:9",
        motion: "Static camera with animated text annotations popping in one by one pointing to each ingredient, clean motion graphics style, upbeat mood, subtle kitchen ambient sounds",
        duration: "4s",
      },
      {
        title: "Prep & Technique",
        startFrame: "Close-up of hands on a cutting board with a chef's knife beginning to julienne a carrot, shallow depth of field, warm kitchen lighting, overhead angle, commercial food photography, 16:9",
        endFrame: "Same angle — carrot now perfectly julienned with an illustrated arrow pointing to the technique and text 'julienne cut — 2mm strips', annotated style overlay, 16:9",
        motion: "Slow motion knife work with annotated arrows appearing to label the technique, smooth and satisfying, peaceful mood, ASMR kitchen sounds, slow-motion 120fps",
        duration: "4s",
      },
      {
        title: "Cooking Process",
        startFrame: "Medium shot of a sauté pan on a gas stove with oil just starting to shimmer, warm dramatic lighting from below, steam beginning to rise, photorealistic food photography, 16:9",
        endFrame: "Same pan now with vegetables being tossed mid-air in a dynamic flip, steam and oil splatter frozen in motion, dramatic rim lighting, photorealistic, 16:9",
        motion: "Speed ramp from normal to slow motion at the pan flip moment, dramatic push in, warm amber tones, sizzling sound design, dynamic and satisfying, cinematic",
        duration: "3s",
      },
      {
        title: "Final Plating",
        startFrame: "Close-up of an empty white plate on a dark surface with dramatic side lighting, minimal and clean, anticipation building, shallow depth of field, 16:9",
        endFrame: "Same plate now beautifully plated with the finished dish, garnished with microgreens and a drizzle of sauce, annotated arrows pointing to 'micro herbs', 'reduction sauce', 'toasted sesame', editorial food photography, 16:9",
        motion: "Time-lapse plating sequence — elements appearing one by one on the plate, then annotated labels fading in, overhead crane shot, elegant mood, upbeat resolution, cinematic",
        duration: "5s",
      },
    ],
  },
  {
    id: "photography-setup",
    name: "Photography Setup Guide",
    icon: "📷",
    description: "BTS photography lighting setup with diagram-style annotations",
    scenes: [
      {
        title: "Studio Overview",
        startFrame: "Wide shot of an empty photography studio with white cyclorama wall, two light stands with softboxes on either side, a camera on tripod in center, overhead practical lights off, clean and minimal, photorealistic, 16:9",
        endFrame: "Same studio wide shot but now with illustrated overlay arrows and labels: 'Key Light — 45°' pointing to left softbox, 'Fill Light — 30°' pointing to right softbox, 'Camera — 50mm f/1.8' pointing to camera, diagram annotation style, 16:9",
        motion: "Slow pan across the studio with animated annotation arrows appearing and pointing to each piece of equipment, educational mood, calm narration style, clean motion",
        duration: "5s",
      },
      {
        title: "Key Light Positioning",
        startFrame: "Medium shot of a softbox light being adjusted by a photographer's hands, the modifier angled at 45 degrees, studio background, warm modeling light glow, photorealistic, 16:9",
        endFrame: "Same softbox now turned on and illuminating a model's face showing classic Rembrandt lighting triangle, split view showing the light setup on left and the resulting portrait on right, annotated with angle arrows, 16:9",
        motion: "Smooth orbit around the key light showing its position relative to the subject, animated light beam diagram overlay showing light direction and falloff, educational mood, gentle ambient music",
        duration: "4s",
      },
      {
        title: "Lighting Comparison",
        startFrame: "Split screen — left side shows a portrait lit with only the key light (dramatic shadows on one side), right side is dark/blank, clean studio backdrop, photorealistic, 16:9",
        endFrame: "Split screen — left still shows key-light-only portrait, right now shows the same portrait with fill light added (softer shadows, more balanced), annotated arrows showing 'Without Fill' and 'With Fill', 16:9",
        motion: "Static split screen with the fill light side fading in from dark to lit, animated comparison slider moving across, educational mood, calm pacing, clean digital",
        duration: "4s",
      },
      {
        title: "Final Result BTS",
        startFrame: "Behind-the-scenes wide shot showing the full studio setup — photographer shooting, model posing, both lights active, assistants in background, busy but organized, photorealistic, 16:9",
        endFrame: "The final resulting portrait photograph displayed on a large monitor in the studio, tack sharp, beautiful lighting, with a small diagram overlay in the corner showing the full lighting setup from above, 16:9",
        motion: "Pull back from the camera viewfinder to reveal the BTS scene, then cut to the final image on monitor, smooth transition, satisfying reveal, professional mood, cinematic",
        duration: "5s",
      },
    ],
  },
  {
    id: "product-showcase",
    name: "Product Showcase / Unboxing",
    icon: "📦",
    description: "Premium product reveal with dramatic lighting and detail shots",
    scenes: [
      {
        title: "Mystery Box",
        startFrame: "Dark scene with a premium matte black box centered on a reflective dark surface, single rim light from behind creating edge glow, mysterious atmosphere, minimal, cinematic, 16:9",
        endFrame: "Same box now with lid slightly ajar, warm golden light spilling out from inside, volumetric light rays, anticipation building, cinematic, 16:9",
        motion: "Very slow push in toward the box, rim light intensifying, golden light beginning to leak from lid, mysterious mood, tension building, dramatic strings",
        duration: "4s",
      },
      {
        title: "The Reveal",
        startFrame: "Close-up of hands lifting the box lid, golden light flooding upward illuminating the face from below, dramatic low angle, cinematic lighting, 16:9",
        endFrame: "Product (luxury watch/tech device/sneaker) now fully revealed resting on premium cushion inside box, hero lighting from multiple angles, sharp detail, commercial photography, 16:9",
        motion: "Dramatic lid lift in slow motion, camera tilts down to reveal product, euphoric mood, epic swell, volumetric light rays, slow-motion 120fps",
        duration: "4s",
      },
      {
        title: "360 Detail Spin",
        startFrame: "Product on a dark turntable at eye level, key light from upper left, clean dark background, commercial product photography, sharp focus, 16:9",
        endFrame: "Product rotated 180 degrees showing the back/other side, same lighting setup but with added accent light catching material textures, commercial photography, 16:9",
        motion: "Smooth 360 orbit around the product, slow and deliberate, highlighting material textures and design details, premium mood, ambient electronic, clean digital",
        duration: "5s",
      },
      {
        title: "Hero Lifestyle Shot",
        startFrame: "Extreme close-up macro shot of the product's key detail (watch face / screen / texture), razor sharp, shallow depth of field, dramatic lighting, 16:9",
        endFrame: "Wide lifestyle shot of the product being used in context (on a wrist / on a desk / being worn), golden hour natural light, aspirational setting, editorial photography, 16:9",
        motion: "Dramatic pull back from macro detail to wide lifestyle context, rack focus transition, aspirational mood, uplifting music, cinematic color grading",
        duration: "5s",
      },
    ],
  },
  {
    id: "real-estate-tour",
    name: "Real Estate Virtual Tour",
    icon: "🏠",
    description: "Cinematic property walkthrough with room-to-room transitions",
    scenes: [
      {
        title: "Exterior Approach",
        startFrame: "Street-level wide shot of a modern home exterior with manicured landscaping, blue sky, golden hour side lighting casting long shadows, real estate photography, clean and inviting, 16:9",
        endFrame: "Medium shot approaching the front door, path leading up with landscaping on sides, warm welcoming porch light on, shallow depth of field on the door, 16:9",
        motion: "Smooth steadicam walk toward the front door, slow push in, golden hour glow, welcoming mood, gentle ambient music, cinematic",
        duration: "4s",
      },
      {
        title: "Grand Entry Reveal",
        startFrame: "Front door beginning to open inward, bright interior light spilling out, camera at door threshold, anticipation, warm tones, 16:9",
        endFrame: "Wide interior shot of the open-plan living area — high ceilings, large windows, modern furniture, natural light flooding in, real estate photography, bright and airy, 16:9",
        motion: "Door swings open with slow push in revealing the interior, volumetric light from windows, rack focus from door to interior, impressive mood, subtle orchestral",
        duration: "4s",
      },
      {
        title: "Kitchen Feature",
        startFrame: "Medium wide shot of a modern kitchen with marble island, pendant lights, stainless appliances, natural light from skylight above, clean and aspirational, 16:9",
        endFrame: "Angled shot showcasing the kitchen island with staged accessories — fruit bowl, cookbook, wine glasses — warm and lived-in but pristine, 16:9",
        motion: "Smooth orbit around the kitchen island, showcasing all angles, bright natural light, peaceful mood, gentle piano, clean and aspirational, steady",
        duration: "5s",
      },
      {
        title: "Outdoor Living",
        startFrame: "Interior shot looking out through large glass sliding doors toward a backyard with pool, doors still closed, reflections on glass, 16:9",
        endFrame: "Camera now outside on the patio looking across the pool toward the house, golden hour light reflecting on water, lush landscaping, resort-like atmosphere, 16:9",
        motion: "Camera glides through the opening glass doors transitioning from interior to exterior, smooth tracking shot, golden hour, serene mood, ambient nature sounds, cinematic",
        duration: "5s",
      },
    ],
  },
  {
    id: "fitness-tutorial",
    name: "Fitness / Exercise Guide",
    icon: "💪",
    description: "Exercise demonstration with form annotations and muscle highlights",
    scenes: [
      {
        title: "Exercise Introduction",
        startFrame: "Wide shot of an athlete standing in a modern gym, hands on hips, facing camera, even bright lighting, clean background, athletic wear, photorealistic, 16:9",
        endFrame: "Same athlete now in starting position for the exercise (e.g., squat stance), with annotated overlay arrows showing 'feet shoulder-width', 'chest up', 'core engaged', diagram style, 16:9",
        motion: "Athlete walks to position and sets up stance, animated annotation arrows appearing pointing to form cues, educational mood, energetic but clear, upbeat ambient",
        duration: "4s",
      },
      {
        title: "Movement Breakdown — Slow",
        startFrame: "Side profile medium shot of athlete at top of movement (standing for squat), annotated line showing spine alignment, clean gym background, photorealistic, 16:9",
        endFrame: "Same side profile — athlete now at bottom of movement (deep squat), annotated arrows showing 'knees tracking toes', 'hip crease below knee', 'neutral spine maintained', 16:9",
        motion: "Ultra slow motion movement from start to finish position, animated muscle highlight overlay glowing on working muscles (quads, glutes), slow-motion 120fps, educational mood",
        duration: "5s",
      },
      {
        title: "Full Speed Reps",
        startFrame: "Front 3/4 angle medium shot of athlete at starting position, dramatic gym lighting with rim light, motivated expression, dynamic energy, photorealistic, 16:9",
        endFrame: "Same angle capturing athlete mid-rep in powerful movement, slight motion blur showing speed and power, muscles engaged, dynamic composition, 16:9",
        motion: "Normal speed repetitions with dynamic camera — slight push in on effort, speed ramp on the explosive phase, heroic mood, high energy music, dramatic",
        duration: "4s",
      },
      {
        title: "Cool Down & Recap",
        startFrame: "Medium shot of athlete finishing last rep, controlled breathing, sweat glistening under gym lights, accomplished expression, warm tones, 16:9",
        endFrame: "Split screen: left shows the exercise being performed in a loop, right shows an annotated diagram with all form cues listed, clean educational layout, 16:9",
        motion: "Slow motion final rep then smooth transition to split-screen recap, calm down in energy, peaceful mood, gentle fade, educational summary",
        duration: "4s",
      },
    ],
  },
];

export interface StoryboardScene {
  id: string;
  title: string;
  startFrame: string;
  endFrame: string;
  motion: string;
  duration: string;
  notes: string;
}
