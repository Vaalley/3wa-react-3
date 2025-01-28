import React from 'react';
import PizzaCard from '@molecules/PizzaCard';
import Title from '@atoms/Title';
import { usePizzas } from '@hooks/queries';
import './HomePage.css';

const HomePage: React.FC = () => {
  const { data: pizzas, isLoading, isError } = usePizzas();

  if (isLoading) {
    return (
      <div className="home-page loading">
        <Title>Chargement des pizzas...</Title>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="home-page error">
        <Title>Erreur lors du chargement des pizzas</Title>
        <p>Veuillez réessayer plus tard.</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <Title>Nos Pizzas</Title>
      <div className="pizza-grid">
        {pizzas?.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            liked={pizza.liked}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
