import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>

    <LeftSection>
        <SectionTitle main center>
          Bem vindo<br />
          ao meu Portfólio
        </SectionTitle>
        <SectionText >
          O propósito do meu porftolio é poder partilhar o meu trabalho e poder inspirar outros a seguirem os seus sonhos.
        </SectionText>
        <Button onClick={() =>window.location = 'https://google.com'}> Ver Mais..</Button>

    </LeftSection>

  </Section>
);

export default Hero;