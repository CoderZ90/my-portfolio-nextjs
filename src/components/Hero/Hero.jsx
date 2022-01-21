import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {/* Welcome To <br /> My Personal Portfolio */}
        Let's Design The Future <br /> And Make It A Reality.
      </SectionTitle>
      <SectionText>
        A Person Who Dreams In Code And Creates <br /> Things That Matters.
      </SectionText>
      <a href="#about">
        <Button>
          Learn More
        </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
