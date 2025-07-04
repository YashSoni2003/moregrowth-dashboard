
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated data
const headlineTemplates = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: The Hidden Gem of {location}",
  "{name} – Transforming {location}'s Business Landscape",
  "{location}'s Favorite: {name} and Their Secret to Success",
  "How {name} is Taking {location} by Storm"
];

function generateHeadline(name, location) {
  const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  return template.replace("{name}", name).replace("{location}", location);
}

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ message: "Missing name or location" });
  }

  res.json({
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    headline: generateHeadline(name, location)
  });
});

// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ message: "Missing query parameters" });
  }

  res.json({
    headline: generateHeadline(name, location)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
