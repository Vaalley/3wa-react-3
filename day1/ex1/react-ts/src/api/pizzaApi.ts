interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  liked?: boolean;
}

// Simulating an API with the existing pizza data
let PIZZAS: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 10,
    liked: false,
  },
  {
    id: 2,
    name: 'Regina',
    description: 'Tomate, mozzarella, jambon, champignons',
    price: 12,
    liked: false,
  },
  {
    id: 3,
    name: 'Calzone',
    description: 'Tomate, mozzarella, jambon, œuf (pizza pliée)',
    price: 13,
    liked: false,
  },
];


export const fetchPizzas = async (): Promise<Pizza[]> => {
  return [...PIZZAS]; // Return a new array to ensure React Query detects the change
};

export const likePizza = async (id: number): Promise<Pizza> => {
  const pizzaIndex = PIZZAS.findIndex(p => p.id === id);
  if (pizzaIndex === -1) {
    alert('Pizza not found');
  }

  // Create a new array with the updated pizza
  PIZZAS = PIZZAS.map((pizza, index) => {
    if (index === pizzaIndex) {
      return { ...pizza, liked: !pizza.liked };
    }
    return pizza;
  });

  return PIZZAS[pizzaIndex];
};

export type { Pizza };
