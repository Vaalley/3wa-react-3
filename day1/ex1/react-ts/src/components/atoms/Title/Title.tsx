import React from 'react';
import './Title.css';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="title">{children}</h2>;
};

export default Title;
