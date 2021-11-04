import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
      {/* <Img src={me.png} /> */}
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello, My name is Stephen Ryan and I am amaeteur Software Developer!
            One of my major goals for growing up was to be able to use one of my greatest talents of creativity, and impliment that into a career.
            With the evergrowing nature of the internet it seems as though there is a vast amount of potential
            to be had when it comes to creating a boundless form of media. With that said let me display through my portfolio why I could be a great Software Developer!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
