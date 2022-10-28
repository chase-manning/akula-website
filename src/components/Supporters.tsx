import styled from "styled-components";
import Section from "./Section";

const StyledSupportedBy = styled.div`
  display: flex;
  font-size: 2rem;
`;

const SupportedBy = () => {
  return (
    <Section highlight id="supported-by" header="Supporters">
      <StyledSupportedBy>
        Gnosis, Stateful Works, 1Inch, Gitcoin
      </StyledSupportedBy>
    </Section>
  );
};

export default SupportedBy;
