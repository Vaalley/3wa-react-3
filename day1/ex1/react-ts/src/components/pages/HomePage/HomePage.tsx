import React from 'react';
import PizzaCard from '@molecules/PizzaCard';
import Title from '@atoms/Title';
import './HomePage.css';

const PIZZAS = [
  {
    name: 'Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 10,
  },
  {
    name: 'Regina',
    description: 'Tomate, mozzarella, jambon, champignons',
    price: 12,
  },
  {
    name: 'Calzone',
    description: 'Tomate, mozzarella, jambon, œuf (pizza pliée)',
    price: 13,
  },
  {
    name: 'Hawai',
    description: 'Tomate, mozzarella, jambon, champignons, œuf (pizza pliée)',
    price: 14,
  },
  {
    name: 'Mediterranea',
    description: 'Tomate, mozzarella, saumon, champignons, œuf (pizza pliée)',
    price: 15,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Title>My Pizza App 🍕</Title>
      <div className="pizzas-grid">
        {PIZZAS.map((pizza) => (
          <PizzaCard
            key={pizza.name}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
