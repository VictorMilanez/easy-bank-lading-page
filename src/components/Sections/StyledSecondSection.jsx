import styled from "styled-components";

export const SectionSecond = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  background-color: hsl(220, 16%, 96%);

  @media (max-width: 500px) {
    margin-left: 3rem;
  }


`;
export const FirstDiv = styled.div`
  display: block;
  align-self: start;
  height: 100%;
  width: 100%;
  max-width: 600px;
  margin-left: 9.4rem;
  padding-bottom: 2.19rem;
  padding-top: 3.8rem;
  overflow: visible;

  @media (max-width: 800px) {
    margin-left: 8rem;
  }

  @media (max-width: 500px) {
    margin-left: 1rem;
    text-align: center;
    width: 95%;
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 3rem;
  width: 100%;

  @media (max-width: 1100px) {
    width: 80%;
    margin-left: 1rem;
    gap: 130px;
  }

  @media (max-width: 800px) {
    margin-left: 5rem;
    gap: 50px;
  }

  @media (max-width: 500px){
    margin-left: 0;
    width: 100%;
    gap: 30px;
  }

  @media (max-width: 400px) {
    margin-left: 2.5rem;
  }
`;

export const Div = styled.div`
  width: 190px;
  margin-left: 8rem;

  @media (max-width: 1100px) {
    width: 35%;
    margin-left: 3rem;
  }

  @media (max-width: 800px) {
    margin-left: 0.5rem;
    margin-right: 2rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 400px ){
    width: 100%;
  }

  @media (max-width: 340px) {
    margin-right: 2.5rem;
  }
`;

export const Img = styled.img`
  width: 72px;
  margin-right: 1rem;
`;


export const Title2 = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: hsl(233, 26%, 24%);
  padding-bottom: 1.56rem;

  @media (max-width: 500px) {
    margin-right: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 40px;
  }

  @media (max-width: 340px) {
    font-size: 32px;
  }
`;

export const H3 = styled.h3`
  font-size: 23px;
  font-weight: 300;
  padding-bottom: 25px;
  padding-top: 35px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const FirstP= styled.p`
  font-size: 17px;
  font-weight: 400;
  color: hsl(233, 8%, 62%);
  padding-bottom: 2.2rem;
  line-height: 1.56rem;
  max-width: 90%;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

`;

export const SecondP= styled.p`
  font-size: 17px;
  font-weight: 400;
  color: hsl(233, 8%, 62%);
  padding-bottom: 2.2rem;
  line-height: 1.56rem;
  max-width: 90%;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
  }

`;

