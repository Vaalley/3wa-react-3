import React from 'react';
import Title from '@atoms/Title';
import Button from '@atoms/Button';
import { useLikePizza } from '@hooks/queries';
import './PizzaCard.css';

interface PizzaCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  liked?: boolean;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ id, name, description, price, liked }) => {
  const likePizzaMutation = useLikePizza();

  const handleOrder = () => {
    alert(`Commande de la pizza ${name} pour ${price}€`);
  };

  const handleLike = () => {
    likePizzaMutation.mutate(id);
  };

  return (
    <div className="pizza-card">
      <Title>{name}</Title>
      <p className="description">{description}</p>
      <p className="price">{price}€</p>
      <div className="actions">
        <Button onClick={handleOrder}>Commander</Button>
        <Button
          onClick={handleLike}
          disabled={likePizzaMutation.isPending}
        >
          {liked ? '❤️' : '🤍'}
        </Button>
      </div>
    </div>
  );
};

export default PizzaCard;
