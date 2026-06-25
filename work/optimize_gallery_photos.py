from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "public" / "gallery"
DEST.mkdir(parents=True, exist_ok=True)

sources = [
    (Path(r"C:\Users\jmch3\Downloads\Living Room.PNG"), "living-room-install"),
    (Path(r"C:\Users\jmch3\Downloads\Bedroom 1.PNG"), "bedroom-soundbar-install"),
    (Path(r"C:\Users\jmch3\Downloads\Bedroom 2.PNG"), "bedroom-wire-concealment"),
]

for source, name in sources:
    image = Image.open(source)
    image = ImageOps.exif_transpose(image).convert("RGB")
    if image.width > 1500:
        ratio = 1500 / image.width
        image = image.resize((1500, int(image.height * ratio)), Image.Resampling.LANCZOS)
    image.save(DEST / f"{name}.webp", "WEBP", quality=78, method=6)
    image.thumbnail((720, 960), Image.Resampling.LANCZOS)
    image.save(DEST / f"{name}-thumb.webp", "WEBP", quality=72, method=6)

print("Optimized gallery photos created.")
