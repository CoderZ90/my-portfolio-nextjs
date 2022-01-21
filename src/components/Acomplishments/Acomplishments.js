import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

import { data } from "../../constants/constants";

const Acomplishments = () => (
  <div>
    <Section style={{ marginTop: "40px" }}>
      <SectionTitle>Personal Accomplishment</SectionTitle>
      <br />
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number} +</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider style={{ marginTop: "20px" }} />
    </Section>
  </div>
);

export default Acomplishments;
