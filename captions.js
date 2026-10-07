// captions.js — keys match the filenames on the live Studio page.
const imageCaptions = {
  "OMA-LV-OSAKA-ORIG-01.avif": "OMA · Louis Vuitton Visionary Journeys — Origins · Osaka, 2025 · design and coordination lead",
  "OMA-LV-OSAKA-ORIG-02.avif": "OMA · Louis Vuitton Visionary Journeys — Origins · Osaka, 2025 · design and coordination lead",
  "OMA-LV-OSAKA-MONO.avif": "OMA · Louis Vuitton Visionary Journeys — Monogram · Osaka, 2025 · design and coordination lead",
  "06-B.jpg": "OMA · Louis Vuitton Visionary Journeys — Fashion · Shanghai, 2025 · design and coordination lead",
  "19.jpg": "OMA · Louis Vuitton Visionary Journeys — Trunkscape · Osaka, 2025 · design and coordination lead",
  "20.jpg": "OMA · Louis Vuitton Visionary Journeys — LV & Japan · Osaka, 2025 · design and coordination lead",
  "21.jpg": "OMA · Louis Vuitton Visionary Journeys — Atelier · Osaka, 2025 · design and coordination lead",
  "OMA-LV-BKK-ICON.avif": "OMA · Louis Vuitton Visionary Journeys — Icons · Bangkok, 2023 · design and coordination lead",
  "03.jpg": "OMA · Louis Vuitton Visionary Journeys — Trunkscape · Bangkok, 2024 · design and coordination lead",
  "04.jpg": "OMA · Louis Vuitton Visionary Journeys — Giveaway · Bangkok, 2024 · design and coordination lead",
  "05.jpg": "OMA · Louis Vuitton Visionary Journeys — Sport · Shanghai, 2025 · design and coordination lead",
  "06.jpg": "OMA · Louis Vuitton Visionary Journeys — Fashion Icons · Shanghai, 2025 · design and coordination lead",
  "07.jpg": "OMA · Louis Vuitton Visionary Journeys — Music · Seoul, 2025 · design and coordination lead",

  "08.jpg": "Anastasio Architects & Stefano Pasqualetti Design · Boston Consulting Group · Miami, 2020",
  "09.jpg": "Anastasio Architects & Stefano Pasqualetti Design · Boston Consulting Group · Miami, 2020",
  "10.jpg": "Anastasio Architects & Stefano Pasqualetti Design · Boston Consulting Group · Miami, 2020",
  "15.jpg": "Anastasio Architects · Giada Flagship · concept, Claudio Silvestrin · Boston, 2019",
  "17.jpg": "Anastasio Architects · Golden Goose · Chicago, 2019",
  "18.jpg": "Anastasio Architects · Golden Goose · Boston, 2020",
  "82McDougal-L.avif": "Anastasio Architects · 82 McDougal · living room · New York, 2018"
};

function captionForSrc(src) {
  if (!src) return "";
  const file = decodeURIComponent(src.split("/").pop());
  return imageCaptions[file] || "";
}
