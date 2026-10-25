
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Izinkan website GitHub Pages mengakses API
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
