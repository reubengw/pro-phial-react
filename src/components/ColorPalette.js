import styled from "styled-components";
import Color from "./Color";

const StyledColorPalette = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  border: 5px solid black;
`;

const ColorPalette = ({ colorscheme }) => {
  return (
    <StyledColorPalette>
      {colorscheme.map((color) => {
        return <Color hexcolor={color.hexcode} label={color.label}></Color>;
      })}
    </StyledColorPalette>
  );
};

export default ColorPalette;
