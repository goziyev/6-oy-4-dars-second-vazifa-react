import styled from "styled-components";
const NavbarBackground = styled.div`
  background: var(--Main, #5361e4);

  width: 100%;
  padding: 24px;
`;
const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  gap: 15px;
  justify-content: space-between;
`;
const Logo = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--White, #fff);
    font-size: 18px;
    font-style: normal;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent;
    transition: all 0.5 linear;
    font-weight: 500;
    line-height: normal;
    &:hover {
      transition: all 0.5s linear;
      border-color: white;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  select {
    background: transparent;
    outline: none;
    border: 2px solid white;
    padding: 7px;
    border-radius: 10px;
    color: white;
    option {
      background-color: black;
      color: white;
    }
   
  }
  button {
      color: var(--Main, #5361e4);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      padding: 8px 24px;
      background-color: transparent;
      color: white;
      border:2px solid white;
      line-height: normal;
      transition: all 0.5s linear;
      border-radius:15px ;
      cursor: pointer;
      &:hover{
        background-color: white;
        color: #5361e4;
      }
    }
`;
export { NavbarBackground, Container, Navigation, Logo, Nav, Buttons };
