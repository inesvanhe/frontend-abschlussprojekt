export type category =
  | "Performance-Tuning"
  | "Body & Wrap"
  | "Custom Build"
  | "Detailling";

export type Service = {
  id: number;
  name: string;
  category: category;
  price: number;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Chiptuning",
    category: "Performance-Tuning",
    price: 300,
  },

  {
    id: 2,
    name: "Sportauspuff-Montage",
    category: "Performance-Tuning",
    price: 200,
  },

  {
    id: 3,
    name: "Luftfilter-Upgrade",
    category: "Performance-Tuning",
    price: 80,
  },

  {
    id: 4,
    name: "Motortuning",
    category: "Performance-Tuning",
    price: 500,
  },

  {
    id: 5,
    name: "Fahrwerk-Setup",
    category: "Custom Build",
    price: 350,
  },

  {
    id: 6,
    name: "Vollfolierung",
    category: "Body & Wrap",
    price: 1000,
  },

  {
    id: 7,
    name: "Teilfolierung",
    category: "Body & Wrap",
    price: 300,
  },

  {
    id: 8,
    name: "Bodykit-Montage",
    category: "Body & Wrap",
    price: 400,
  },

  {
    id: 9,
    name: "Innenreinigung",
    category: "Detailling",
    price: 100,
  },

  {
    id: 10,
    name: "Politur & Versiegelung",
    category: "Detailling",
    price: 150,
  },

  {
    id: 11,
    name: "Keramikbeschichtung",
    category: "Detailling",
    price: 400,
  },
];
