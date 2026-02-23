export type Kategorie = "Performance-Tuning" | "Body & Wrap" | "Custom Build";
export type Einheit = "Stück" | "Meter" | "Satz";

export type Produkt = {
  id: number;
  name: string;
  kategorie: string;
  preis: number;
  einheit: string;
  verfügbarkeit: boolean;
};

export const produkte: Produkt[] = [
  {
    id: 1,
    name: "Sport-Luftfilter",
    kategorie: "Performance-Tuning",
    preis: 50,
    einheit: "Stück",
    verfügbarkeit: true,
  },

  {
    id: 2,
    name: "Sportauspuff",
    kategorie: "Performance-Tuning",
    preis: 300,
    einheit: "Stück",
    verfügbarkeit: true,
  },

  {
    id: 3,
    name: "Chiptuning-Kit",
    kategorie: "Performance-Tuning",
    preis: 200,
    einheit: "Stück",
    verfügbarkeit: true,
  },

  {
    id: 4,
    name: "Bodykit",
    kategorie: "Body & Wrap",
    preis: 600,
    einheit: "Stück",
    verfügbarkeit: true,
  },

  {
    id: 5,
    name: "Carbon-Heckspoiler",
    kategorie: "Custom Build",
    preis: 190,
    einheit: "Stück",
    verfügbarkeit: true,
  },

  {
    id: 6,
    name: "Folie",
    kategorie: "Body & Wrap",
    preis: 30,
    einheit: "Meter",
    verfügbarkeit: true,
  },

  {
    id: 7,
    name: "Sport-Federn",
    kategorie: "Custom Build",
    preis: 150,
    einheit: "Satz",
    verfügbarkeit: true,
  },

  {
    id: 8,
    name: "Alufelgen",
    kategorie: "Custom Build",
    preis: 800,
    einheit: "Satz",
    verfügbarkeit: true,
  },

  {
    id: 9,
    name: "Sport-Lenkrad",
    kategorie: "Custom Build",
    preis: 130,
    einheit: "Stück",
    verfügbarkeit: true,
  },

  {
    id: 10,
    name: "Schalensitz",
    kategorie: "Custom Build",
    preis: 350,
    einheit: "Stück",
    verfügbarkeit: true,
  },
];
