const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const src = "public/logo.jpeg";
const out = "public";

async function main() {
  if (!fs.existsSync(src)) {
    console.error("Missing public/logo.jpeg");
    process.exit(1);
  }

  // 512x512 png (modern browsers)
  await sharp(src)
    .resize(512, 512, { fit: "contain", background: { r: 10, g: 15, b: 26, alpha: 1 } })
    .png()
    .toFile(path.join(out, "icon-512.png"));

  // 96x96 (legacy)
  await sharp(src)
    .resize(96, 96, { fit: "contain", background: { r: 10, g: 15, b: 26, alpha: 1 } })
    .png()
    .toFile(path.join(out, "favicon-96x96.png"));

  // 180x180 apple touch
  await sharp(src)
    .resize(180, 180, { fit: "contain", background: { r: 10, g: 15, b: 26, alpha: 1 } })
    .png()
    .toFile(path.join(out, "apple-touch-icon.png"));

  // 32x32 for ico fallback
  const png32 = await sharp(src)
    .resize(32, 32, { fit: "contain", background: { r: 10, g: 15, b: 26, alpha: 1 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(out, "favicon.ico"), png32);

  // 1200x630 OG image
  await sharp(src)
    .resize(1200, 630, { fit: "contain", background: { r: 10, g: 15, b: 26, alpha: 1 } })
    .png()
    .toFile(path.join(out, "og.png"));

  console.log("Generated: icon-512.png, favicon-96x96.png, apple-touch-icon.png, favicon.ico, og.png");
}

main().catch((e) => { console.error(e); process.exit(1); });
