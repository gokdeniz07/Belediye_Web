// public klasöründen görseller çekiyoruz, require vs. gerek yok

const mealNames = [
  "alanya-piyazi",
  "aside",
  "bakla-pilavi",
  "baklava",
  "bal-kabagi-yemegi",
  "balik-mancuru",
  "bumbar",
  "cevizli-kadayif",
  "cigirdik",
  "dari-corbasi",
  "dikenli-kabak-talaturu",
  "etli-pilav",
  "fasulye",
  "goc-coregi",
  "goleviz",
  "guluklu-corba",
  "icli-gozleme",
  "ilibada-dolmasi",
  "kabuklu-kuru-fasulye",
  "kak",
  "kasik-helvasi",
  "kirtaki",
  "kivrim",
];

const meals = mealNames.map((slug) => ({
  name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), // Baş harfleri büyüt
  image: `/data/meals/${slug}.jpg`,
}));

export default meals;
