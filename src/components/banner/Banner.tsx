import React from 'react';

import './Banner.scss';

interface BannerProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Banner = ({ children, title, subtitle }: BannerProps): JSX.Element => (
  <div className="banner">
    <h1>{title}</h1>
    <div />
    <p>{subtitle}</p>
    {children}
  </div>
);

export default React.memo(Banner);
