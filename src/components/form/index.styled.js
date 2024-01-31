import styled from "styled-components";

const FormWrapper = styled.div`
  width: 778px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  background-color: white;
  border-radius: 24px;
  background: #fff;
  padding: 32px 38px;
  box-shadow: 0px 0px 10px lightcyan;
  h2 {
    color: var(--Dark, #2a2941);
    font-feature-settings: "clig" off, "liga" off;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 41.6px */
    margin-bottom: 16px;
  }
  .description {
    color: var(--30-black, #b3b3b3);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Circular Std";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    margin-bottom: 20px;
  }
`;

const ImgAndText = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  & > p {
    cursor: pointer;
  }
`;
const Links = styled.div`
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div {
    display: flex;
    gap: 10px;
  }
  div div {
    cursor: pointer;
    padding: 16px 20px;
    border: 2px solid lightgray;
    border-radius: 18px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
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

  div {
    width: 45%;
    select {
      margin-top: 7px;
      padding: 18px;
      width: 300px;
      border-radius: 16px;
      border: 1px solid #e3e3e3;
    }
  }
`;

const TextArea = styled.div`
  margin-top: 10px;
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
  textarea {
    resize: none;
    padding: 18px;
    border-radius: 16px;
    margin-top: 10px;
    border: 1px solid #e3e3e3;
    width: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  & button:first-child {
    color: var(--Gray, #6e6dbb);
    font-feature-settings: "clig" off, "liga" off;
    font-size: 16px;
    padding: 15px 30px;
    border-radius: 16px;
    background: #f6f6f6;
    font-style: normal;
    border: none;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  & button:last-child {
    color: var(--White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    border-radius: 16px;
    background: var(--Mai, #5361e4);
    display: inline-flex;
    border: none;
    cursor: pointer;
    height: 60px;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;
    border:2px solid transparent;
    text-transform: uppercase;
    transition: all 0.5s linear;
    &:hover{
      background-color: transparent;
      color: #5361e4;
      border-color: #5361e4;
    }
  }
`;

export { FormWrapper, ImgAndText, Links, SelectWrapper, TextArea, Buttons };
