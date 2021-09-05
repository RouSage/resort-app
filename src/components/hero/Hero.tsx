import React from 'react';
import './Hero.scss';

interface HeroProps {
  children: React.ReactNode;
  hero?: string;
}

const Hero = ({ children, hero = 'defaultHero' }: HeroProps): JSX.Element => (
  <header className={hero}>{children}</header>
);

export default React.memo(Hero);
