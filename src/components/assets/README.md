# Lanyard Assets

You need to add the following files to this directory:

1. **card.glb** - The 3D model of the ID card with clip
   - This is a Three.js/GLTF format 3D model
   - Should contain nodes for: card, clip, and clamp geometry

2. **lanyard.png** - The lanyard texture image
   - This is a repeating texture pattern for the rope
   - Recommend 512x512 or higher resolution for best quality
   - Used with repeat={[-4, 1]} for tiling effect

To create a placeholder card.glb:
- You can export from Blender as GLTF/GLB format
- Or use Three.js to programmatically create a simple card geometry

Place both files in this `assets/` directory so the imports work correctly.
