
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://pajar122.github.io"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Ynn.dl API",
    status: "online",
    message: "Backend Ynn.dl berhasil berjalan!"
  });
});

app.post("/api/check", (req, res) => {
  const { url } = req.body || {};

  if (typeof url !== "string" || !url.trim()) {
    return res.status(400).json({
      error: "Masukkan link terlebih dahulu."
    });
  }

  try {
    const parsed = new URL(url);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("Invalid protocol");
    }

    return res.json({
      valid: true,
      message: "Link berhasil diperiksa.",
      hostname: parsed.hostname
    });
  } catch {
    return res.status(400).json({
      error: "Link tidak valid."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Ynn.dl API berjalan di port ${PORT}`);
});
