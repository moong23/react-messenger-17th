import styled from "styled-components";

interface CCProps {
  color: string;
  type: "tag" | "button";
}

interface ICProps {
  color: string;
  _type: "tag" | "button";
  selected: boolean;
}

export const CardCircle = styled.div<CCProps>`
  display: inline-block;
  margin: 0 4px;
  align-items: center;
  width: 12px;
  height: 12px;
  padding: 1px;
  border-radius: 50%;
  background-color: ${(props) => `var(--${props.color}-${props.type})`};
  &:hover {
    cursor: url(Link.cur) 0 0, pointer;
    &::before {
      content: "${(props) => (props.color === "red" ? "x" : "")}";
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
`;

export const InputCircle = styled.input<ICProps>`
  appearance: none;
  display: inline-block;
  margin: 0 4px;
  align-items: center;
  width: max(12px, 1.2vw);
  height: max(12px, 1.2vw);
  padding: 1px;
  border-radius: 50%;
  background-color: ${(props) => `var(--${props.color}-${props._type})`};
  &:hover {
    cursor: url(Link.cur) 0 0, pointer;
  }
  border: ${(props) => (props.selected ? "1px solid white" : "none")};
  transition: border 0.3s ease-in-out;
`;
