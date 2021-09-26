import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>
        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Como dominar o mundo?</span>
              <span className="subtext">há 1 d • 2M leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Expulsão dos cachorros</span>
              <span className="subtext">há 5 d • 700mil leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Guerra ao banho</span>
              <span className="subtext">há 1 M • 420mil leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
