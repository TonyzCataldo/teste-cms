import styled from "styled-components";

export const Paragraph = styled.p<{
  $fontSize: number;
  $color: string;
  $textAlign: string;
  $paddingBlock: number;
}>`
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  color: ${({ $color }) => $color};
  text-align: ${({ $textAlign }) => $textAlign};
  padding-block: ${({ $paddingBlock }) => `${$paddingBlock}px`};
`;
