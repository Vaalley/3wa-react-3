import React from 'react';
import Title from '@atoms/Title';
import Button from '@atoms/Button';
import './PizzaCard.css';

interface PizzaCardProps {
  name: string;
  description: string;
  price: number;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ name, description, price }) => {
  const handleOrder = () => {
    alert(`Commande de la pizza ${name} pour ${price}€`);
  };

  return (
    <div className="pizza-card">
      <Title>{name}</Title>
      <p className="description">{description}</p>
      <p className="price">{price}€</p>
      <Button
        label="Commander"
        onClick={handleOrder}
        variant="primary"
      />
    </div>
  );
};

export default PizzaCard;
