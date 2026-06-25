from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"C:\Users\jmch3\OneDrive\Desktop\TV Logo.png")
BRAND = ROOT / "public" / "brand"
PUBLIC = ROOT / "public"
OUT = ROOT / "outputs"

BRAND.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

source = Image.open(SOURCE).convert("RGB")

def fit_into(image, size, background=(0, 0, 0)):
    canvas = Image.new("RGB", size, background)
    copy = image.copy()
    copy.thumbnail(size, Image.Resampling.LANCZOS)
    x = (size[0] - copy.width) // 2
    y = (size[1] - copy.height) // 2
    canvas.paste(copy, (x, y))
    return canvas

site_logo = source.copy()
if site_logo.width > 1400:
    ratio = 1400 / site_logo.width
    site_logo = site_logo.resize((1400, int(site_logo.height * ratio)), Image.Resampling.LANCZOS)

site_logo.save(BRAND / "jm-tv-logo.png", "PNG", optimize=True)
site_logo.save(BRAND / "full-logo.png", "PNG", optimize=True)
site_logo.save(OUT / "JM-TV-full-logo.png", "PNG", optimize=True)

og_logo = fit_into(source, (1200, 900))
og_logo.save(BRAND / "og-logo.png", "PNG", optimize=True)

icon = fit_into(source, (512, 512))
icon.save(BRAND / "icon-only.png", "PNG", optimize=True)
icon.save(BRAND / "favicon.png", "PNG", optimize=True)
icon.save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (128, 128), (256, 256)])

print("Updated website logo, favicon, and Open Graph image.")
