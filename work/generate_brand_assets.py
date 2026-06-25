from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "brand" / "jm-tv-logo.png"
BRAND = ROOT / "public" / "brand"
OUT = ROOT / "outputs"
BRAND.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

NEON = (124, 255, 0)
BLACK = (17, 17, 17)
DARK = (45, 45, 45)
WHITE = (255, 255, 255)

logo = Image.open(SOURCE).convert("RGBA")
logo.save(BRAND / "full-logo.png")
logo.save(OUT / "JM-TV-full-logo.png")

def remove_dark_background(img):
    rgba = img.copy()
    px = rgba.load()
    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = px[x, y]
            if r < 18 and g < 18 and b < 18:
                px[x, y] = (0, 0, 0, 0)
    return rgba

transparent = remove_dark_background(logo)
transparent.save(BRAND / "logo-transparent.png")
transparent.save(OUT / "JM-TV-transparent-logo.png")

alpha = transparent.getchannel("A")
white_logo = Image.new("RGBA", logo.size, WHITE + (0,))
white_logo.putalpha(alpha)
white_logo.save(BRAND / "logo-white.png")
white_logo.save(OUT / "JM-TV-white-logo.png")

black_logo = Image.new("RGBA", logo.size, BLACK + (0,))
black_logo.putalpha(alpha)
black_logo.save(BRAND / "logo-black.png")
black_logo.save(OUT / "JM-TV-black-logo.png")

icon = transparent.crop((170, 130, 840, 720))
icon.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
canvas = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
canvas.alpha_composite(icon, ((1024 - icon.width) // 2, (1024 - icon.height) // 2))
canvas.save(BRAND / "icon-only.png")
canvas.save(OUT / "JM-TV-icon-only.png")
canvas.resize((256, 256), Image.Resampling.LANCZOS).save(BRAND / "favicon.png")
canvas.resize((256, 256), Image.Resampling.LANCZOS).save(ROOT / "public" / "favicon.ico")

def font(size, bold=False, condensed=False):
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/impact.ttf" if condensed else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()

def fit_text(draw, text, max_width, size, bold=True):
    while size > 16:
        f = font(size, bold=bold, condensed=True)
        bbox = draw.textbbox((0, 0), text, font=f)
        if bbox[2] - bbox[0] <= max_width:
            return f
        size -= 2
    return font(size, bold=bold, condensed=True)

def base_canvas(size, title, subtitle=None):
    w, h = size
    img = Image.new("RGB", size, BLACK)
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, 0, w, h], fill=BLACK)
    draw.rectangle([0, h - int(h * .18), w, h], fill=DARK)
    draw.line([0, int(h * .18), w, int(h * .18)], fill=NEON, width=max(5, w // 120))
    badge = logo.resize((min(w // 4, h // 3), min(w // 4, h // 3)), Image.Resampling.LANCZOS)
    img.paste(badge, (int(w * .055), int(h * .055)), badge)
    title_font = fit_text(draw, title, int(w * .63), max(42, w // 12))
    draw.text((int(w * .36), int(h * .075)), title, font=title_font, fill=WHITE)
    if subtitle:
        sub_font = fit_text(draw, subtitle, int(w * .63), max(22, w // 32), bold=False)
        draw.text((int(w * .36), int(h * .075) + title_font.size + 12), subtitle, font=sub_font, fill=NEON)
    return img, draw

def save_png(name, size, title, subtitle, bullets=()):
    img, draw = base_canvas(size, title, subtitle)
    w, h = size
    y = int(h * .39)
    body_font = font(max(22, w // 34), bold=True)
    for bullet in bullets:
        draw.text((int(w * .09), y), f"+ {bullet}", font=body_font, fill=WHITE)
        y += int(body_font.size * 1.55)
    contact_font = fit_text(draw, "Call or Text 561-663-3072", int(w * .8), max(26, w // 28))
    draw.text((int(w * .09), int(h * .84)), "Call or Text 561-663-3072", font=contact_font, fill=NEON)
    draw.text((int(w * .09), int(h * .9)), "jmtvmounting@gmail.com", font=font(max(18, w // 45), bold=True), fill=WHITE)
    img.save(OUT / f"{name}.png", quality=95)
    img.save(OUT / f"{name}.pdf")

materials = [
    ("business-card", (1050, 600), "JM TV Mounting", "Clean. Secure. Perfectly Leveled.", ["TV Mounting", "Wire Concealment", "Soundbars"]),
    ("flyer", (1275, 1650), "Professional TV Mounting", "Serving South Florida", ["TV Mounting from $125", "In-wall wire kits", "Soundbar installation", "Free quote by phone or text"]),
    ("door-hanger", (900, 2100), "Need Your TV Mounted?", "Premium installations nearby", ["Same-week appointments", "Clean wire concealment", "Fireplace installs", "Call or text today"]),
    ("yard-sign", (1800, 1200), "TV Mounting", "Call or Text 561-663-3072", ["Clean installs", "Wire concealment", "Home theater setup"]),
    ("vehicle-magnet", (1800, 900), "JM TV Mounting", "561-663-3072", ["TVs", "Soundbars", "Hidden wires"]),
    ("facebook-cover", (1640, 624), "JM TV Mounting & Installation", "Professional TV Mounting & Wire Concealment", ["Boca Raton", "Coconut Creek", "Coral Springs"]),
    ("instagram-profile-image", (1080, 1080), "JM TV", "Mounting & Installation", ["Call or Text", "561-663-3072"]),
    ("google-business-cover", (2120, 1192), "JM TV Mounting & Installation", "Premium South Florida TV Installations", ["Clean", "Secure", "Perfectly leveled"]),
    ("email-signature", (1200, 450), "JM TV Mounting", "Professional TV Mounting & Installation", ["561-663-3072", "jmtvmounting@gmail.com"]),
    ("invoice-template", (1275, 1650), "Invoice", "JM TV Mounting & Installation", ["Customer:", "Service:", "Amount:", "Payment Status:"]),
    ("estimate-template", (1275, 1650), "Estimate", "JM TV Mounting & Installation", ["TV Mounting:", "Wire Concealment:", "Soundbar:", "Estimated Total:"]),
    ("gift-certificate", (1500, 750), "Gift Certificate", "Premium TV Mounting Service", ["To:", "From:", "Amount:", "Valid for JM TV services"]),
    ("review-request-card", (1050, 600), "How Did We Do?", "★★★★★", ["Scan or search us on Google", "Your review helps local customers", "Thank you for choosing JM TV"])
]

for material in materials:
    save_png(*material)

print(f"Generated brand assets and {len(materials)} marketing material sets in {OUT}")
