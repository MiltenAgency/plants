# Little Grove asset notes

## User-supplied photography

The three photos were supplied by the user. Original PNG files are preserved; website copies use lossless WebP encoding with the same dimensions and pixels. Display crops use the existing CSS layout.

| Original upload | Website asset | Placement |
| --- | --- | --- |
| `public/assets/User attachment.png` | `public/assets/sunlit-monstera.webp` | Garden overview |
| `public/assets/User attachmentq.png` | `public/assets/window-plant.webp` | Care checklist card |
| `public/assets/User attachment2.png` | `public/assets/garden-planting.webp` | Growing section and add-plant card |

The earlier generated garden photographs have been replaced in the page. Their files remain available as unused prior assets.

## User-supplied hero plants

`public/plants1.jpg` through `public/plants6.jpg` are the preserved original uploads. The built-in image_gen tool removed their photographic backgrounds, keeping each plant and pot. Website copies preserve transparency using lossless WebP encoding.

The six final assets are `public/assets/plants/plant-1-cutout.webp` through `public/assets/plants/plant-6-cutout.webp`, used in order in the hero and matching detail dialogs. Hero cutouts are enlarged and have no visible name labels. Accessible button names remain available for screen readers.

### Background removal prompt (applied separately to each original)

Use case: background-extraction. Edit target: the attached single potted plant photograph. Remove only the background wall, tabletop, floor and cast shadow, leaving a clean photorealistic cutout of the exact original plant AND its complete original pot on genuine transparent alpha. Preserve the exact species, number and shape of leaves or flowers, leaf colors, stems, pot shape, pot color, camera view, textures and lighting. Do not redraw or redesign the subject. Keep all fine stems and every leaf or flower tip; preserve natural antialiased edges. Frame the full plant and full pot tightly, centered with only 5 percent transparent margin around the subject. No text, no title, no labels, no border, no colored panel, no checkerboard painted into the image. Output a single isolated original plant and pot with transparent background.

## Native vector artwork

The Little Grove identity is original SVG artwork inspired by the user's leaf and care references. It combines a three-leaf sprout with an open curved cradle, using forest green (`#0d4a35`) and soft green (`#8eab52`). The reference images are not embedded in the logo files.

- `public/assets/brand/little-grove-logo.svg`: horizontal logo with an embedded, licensed DM Sans font.
- `public/assets/brand/little-grove-mark.svg`: transparent two-color symbol, used in the navbar and footer.
- `public/assets/brand/little-grove-mark-mono.svg`: single-color symbol.
- `public/icon.svg`: matching favicon on a cream tile.

The earlier plant illustrations in `public/assets/plants/` remain as unused prior assets.

## Font

DM Sans is locally served from `public/assets/dm-sans.woff2`. Its license is included as `public/assets/OFL-dmsans.txt`.

## Replaced assets

The previous reference-derived collaborator avatars and workplace photographs were removed from the public asset directory. The new text and artwork use a gardening concept. This record documents asset provenance and is not a legal clearance or trademark availability check for the working name.
