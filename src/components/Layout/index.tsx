//componente que organiza todo o conteúdo da pagina
import React, { useState, useEffect } from 'react';
//importações dos componentes
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import AdBanner from '../AdBanner';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';
//parte responsavel pelo carregamento do Layout antes do conteúdo
const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    // organização do conteudo
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
