export type category =
  | "All"
  | "Performance-Tuning"
  | "Body & Wrap"
  | "Custom Build";
export type unit = "Stück" | "Meter" | "Satz";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  available: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sport-Luftfilter",
    category: "Performance-Tuning",
    price: 49.99,
    unit: "Stück",
    available: true,
  },

  {
    id: 2,
    name: "Sportauspuff",
    category: "Performance-Tuning",
    price: 299.99,
    unit: "Stück",
    available: true,
  },

  {
    id: 3,
    name: "Chiptuning-Kit",
    category: "Performance-Tuning",
    price: 199.99,
    unit: "Stück",
    available: true,
  },

  {
    id: 4,
    name: "Bodykit",
    category: "Body & Wrap",
    price: 599.99,
    unit: "Stück",
    available: true,
  },

  {
    id: 5,
    name: "Carbon-Heckspoiler",
    category: "Custom Build",
    price: 189.99,
    unit: "Stück",
    available: true,
  },

  {
    id: 6,
    name: "Folie",
    category: "Body & Wrap",
    price: 29.99,
    unit: "Meter",
    available: true,
  },

  {
    id: 7,
    name: "Sport-Federn",
    category: "Custom Build",
    price: 149.99,
    unit: "Satz",
    available: true,
  },

  {
    id: 8,
    name: "Alufelgen",
    category: "Custom Build",
    price: 799.99,
    unit: "Satz",
    available: true,
  },

  {
    id: 9,
    name: "Sport-Lenkrad",
    category: "Custom Build",
    price: 129.99,
    unit: "Stück",
    available: true,
  },

  {
    id: 10,
    name: "Schalensitz",
    category: "Custom Build",
    price: 349.99,
    unit: "Stück",
    available: true,
  },
];
