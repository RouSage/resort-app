import React from 'react';

import './Title.scss';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps): JSX.Element => (
  <div className="section-title">
    <h4>{title}</h4>
    <div />
  </div>
);

export default React.memo(Title);
