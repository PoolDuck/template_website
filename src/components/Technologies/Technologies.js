import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import { SiAltiumdesigner } from 'react-icons/si';


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Programação</SectionTitle>
    <SectionText>
      Experiencia com diversas linguagens de programação, tanto a nivel front-end como back-end.
    </SectionText>
    <List>
      <ListItem>
       <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia com <br/>
            react.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia com <br/>
            Node e Base de Dados.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      
      <SiAltiumdesigner size="3rem"/>
        
        <ListContainer>
          <ListTitle>UI/UX Design </ListTitle>
          <ListParagraph>
            Experiencia com <br/>
            figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
