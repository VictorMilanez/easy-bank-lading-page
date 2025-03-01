import styled from "styled-components";

export const SectionFirst = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: hsl(0, 0%, 98%);
  width: 100%;
  max-width: 1440px;
  overflow: hidden;

  @media (max-width: 500px) {
    /* display: grid;
    grid-template-rows: repeat(2, 1fr); */
    flex-direction: column-reverse;
    /* height: 100vh; */
    margin-left: 3rem;
    margin-top: 20px;
  }
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 680px;
  margin-left: 9.37rem;
  margin-bottom: 5.62rem;

  @media(max-width: 800px){
    margin-left: 7.2rem;
  }

  @media (max-width: 500px){
    width: 100%;
    margin-left: 6rem;
    margin-bottom: 2.5rem;
  }
`;

export const Title1 = styled.h1`
  font-size: 60px;
  font-weight: 400;
  color: hsl(233, 26%, 24%);
  padding-bottom: 1.56rem;

  @media(max-width: 800px) {
    font-size: 45px;
    padding-right: 0.8rem;
    margin-right: 1rem;
  }
`;

export const P1 = styled.p`
  font-weight: 400;
  color: hsl(233, 8%, 62%);
  padding-bottom: 2.18rem;

  @media(max-width: 800px) {
    margin-right: 1.2rem;
  }

  @media (max-width: 500px){
    width: 80%;
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1440px;

  @media (max-width: 500px) {
    margin-top: -8rem;
    margin-left: 3rem;
    overflow: hidden;
  }
`;

export const Picture2 = styled.picture`
  position: absolute;
  width: 100%;
`;

export const Img1 = styled.img`
  max-width: 120%;
  height: auto;
  position: relative;
  z-index: 1;
  transform: translateY(-24%);
  bottom: 0.62rem;
  left: 9.5%;

  @media (max-width: 1100px) {
    left: -5%;
  }

  @media (max-width: 800px){
    left: -5%;
    bottom: 1%;
    transform: translateY(-10%);
  }

  @media (max-width: 500px){
    transform: translateY(15%);
  }
`;

export const Img2 = styled.img`
  height: auto;
  max-width: 120%;
  position: absolute;
  z-index: 2;
  transform: translateY(-16.5%);
  top: 1rem;
  left: 17%;

  @media (max-width: 1100px) {
    top: 0.1rem;
    left: 10%;
    max-width: 110%;
    transform: translateY(-20.5%);
  }

  @media (max-width: 500px){
    width: 75%;
    top: 5rem;
    left: 20%;
  }
`;
