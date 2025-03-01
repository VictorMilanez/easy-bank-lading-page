import styled from "styled-components";

export const DivBar = styled.div`
  width: 3rem;
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  height: 5px;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
  margin-top: 1rem;
  opacity: 0;
`;

export const Nav = styled.nav`
  padding: 1.87rem 0.62rem 0.62rem 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 3;
  background-color: #fff;

  @media (max-width: 1100px) {
    margin-left: 55px;
  }

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;
export const Ul = styled.ul`
  display: flex;

  @media (max-width: 500px){
    flex-direction: column;
    position: absolute;
    top: 75px;
    right: -90px;
    background-color: #ffffff;
    width: 70%;
    margin-right: 8rem;
    border-radius: 5px;
    margin-top: 1.5rem;
    height: 240px;
    display: ${({open}) => (open ? "block" : "none")};
  }
`;

export const ImgMenu = styled.img`
  display: none;

  @media (max-width: 500px) {
    display: block;
    width: 8%;
  }
`;

export const Li = styled.li`
  padding-right: 1.87rem;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover ${DivBar} {
    opacity: 1;
  }

  @media (max-width: 800px) {
    font-size: 12px;
    padding-right: 1rem;
    padding-top: 1rem;
  }

  @media (max-width: 500px) {
    padding-top: 0.2rem;
  }
`;

export const A = styled.a`
  color: hsl(233, 8%, 62%);
  cursor: pointer;

  &:hover {
    color: hsl(233, 26%, 24%);
  }

  @media (max-width: 500px){
    text-align: center;
    
    &:first-child {
      margin-top: 0.3rem;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 100%;

  @media (max-width: 800px) {
    width: 90%;
  }

`;
