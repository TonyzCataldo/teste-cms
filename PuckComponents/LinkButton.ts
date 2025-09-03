import styled from "styled-components";
import { rgba } from "polished";

export const LinkButton = styled.a<{
  $paddingBlock: string;
  $width: number;
  $color: string;
  $textColor: string;
  $radius: number;
}>`
  padding-block: ${({ $paddingBlock }) => $paddingBlock};
  text-align: center;
  width: ${({ $width }) => `${$width}%`};
  background-color: ${({ $color }) => $color};
  border-radius: ${({ $radius }) => `${$radius}px`};
  cursor: pointer;
  transition: filter 0.2s ease;
  color: ${({ $textColor }) => $textColor};
  &:hover {
    filter: brightness(0.8);
  }
`;

export const OutlinedLinkButton = styled(LinkButton)`
  border: ${({ $color }) => `1px solid ${$color}`};
  background-color: transparent;
  color: ${({ $color }) => $color};
  &:hover {
    background-color: ${({ $color }) => rgba($color, 0.15)};
  }
`;

export const TextLinkButton = styled(OutlinedLinkButton)`
  border: none;
`;

export const LinkButtonContainer = styled.div<{
  $justifyContent: string;
}>`
  width: 100%;

  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
`;
