import React from 'react';
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa';
import Title from '../Title';
import './Services.scss';

const services = [
  {
    icon: <FaCocktail />,
    title: 'Free Cocktails',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim?',
  },
  {
    icon: <FaHiking />,
    title: 'Endless Hiking',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim?',
  },
  {
    icon: <FaShuttleVan />,
    title: 'Free Shuttle',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim?',
  },
  {
    icon: <FaBeer />,
    title: 'Strongest Beer',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim?',
  },
];

const Services = () => {
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service) => (
          <article key={service.title} className="service">
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Services);
