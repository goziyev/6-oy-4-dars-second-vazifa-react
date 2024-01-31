import { styled } from "styled-components";

const Forma = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 7px;
  label {
    display: flex;
    gap: 10px;
    color: var(--Dark, #2a2941);
    font-feature-settings: "clig" off, "liga" off;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    span {
      color: var(--Dark, #ff2424);
      font-feature-settings: "clig" off, "liga" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  input {
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #e3e3e3;
    outline: none;
  }
`;

export { Forma };
