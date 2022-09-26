import styled, { css } from "styled-components";

const StyledColor = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 30px;
  align-items: center;
`;

const StyledColorInfo = styled.span`
  font-size: 25px;
`;

const StyledColorSquare = styled.div`
  margin: 10px 0;
  width: 100%;
  aspect-ratio: 1/1;
  ${({ hexcolor }) =>
    css`
      background-color: ${hexcolor};
    `}
`;

const Color = ({ hexcolor, label }) => {
  return (
    <StyledColor>
      <StyledColorInfo>{hexcolor}</StyledColorInfo>
      <StyledColorSquare hexcolor={hexcolor}></StyledColorSquare>
    </StyledColor>
  );
};

export default Color;
