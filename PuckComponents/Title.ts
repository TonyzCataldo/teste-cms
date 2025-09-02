"use client";
import styled from "styled-components";

export const Title = styled.h1<{
  $fontSize: number;
  $color: string;
  $textAlign: string;
  $paddingBlock: number;
}>`
  font-size: ${({ $fontSize }) => `${$fontSize}` + "px"};
  font-weight: 700;

  color: ${({ $color }) => $color};
  text-align: ${({ $textAlign }) => $textAlign};
  padding-block: ${({ $paddingBlock }) => `${$paddingBlock}px`};
`;
