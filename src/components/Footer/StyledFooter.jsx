import styled from "styled-components";

export const FooterPage = styled.footer`
  padding: 1.25rem 0.63rem 0.63rem 4.69rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1440px;
  background-color: hsl(233, 26%, 24%);
  height: 190px;

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, 425px);
    grid-template-rows: repeat(3, auto);
    margin-left: 3rem;
    width: 425px;
    height: 100%;
  }

  @media (max-width: 400px) {
    width: 380px;
  }

  @media (max-width: 330px) {
    width: 320px;
  }
`;

export const Img = styled.img`
  filter: invert(1) brightness(2);
  margin-bottom: 3.13rem;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const LogoIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 210px;
  margin-left: 2.8rem;

  @media (max-width: 800px) {
    width: 150px;
    margin-left: 4.5rem;
  }

  @media (max-width: 400px) {
    margin-left: 2rem;
  }

  @media (max-width: 330px) {
    margin-left: 1rem;
  }
`;

export const Icons = styled.div`
  width: 210px;

  @media (max-width: 800px) {
    width: 110px;
  }

  @media (max-width: 500px) {
    width: 250px;
    margin-left: 0.5rem;
  }
`;

export const LinkIcons = styled.a`
  margin-right: 0.8rem;
  display: inline-block;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0) saturate(100%) invert(66%) sepia(9%) saturate(2766%)
      hue-rotate(106deg) brightness(97%) contrast(91%);
  }

  @media (max-width: 800px) {
    width: 20px;
    margin-top: 0.5rem;
  }

  @media (max-width: 500px) {
    width: 15px;
  }
`;

export const DivSupport = styled.div`
  display: flex;
  margin-right: 11.9rem;

  Ul:nth-child(1) {
    margin-right: 2.5rem;
  }

  @media (max-width: 800px) {
    width: 10%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    width: 90%;
    margin-right: 1rem;
    margin-left: -4rem;
  }

  @media (max-width: 340px) {
    width: 60%;
    margin-right: 1rem;
    margin-left: -4.5rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    &:nth-of-type(2) {
      margin-right: -10rem;
    }

    @media (max-width: 800px) {
      padding-right: -1rem;
      margin-top: 1rem;
      margin-left: 0.5rem;
    }

    @media (max-width: 500px) {
      &:nth-child(1) {
        margin-left: 7rem;
      }

      &:nth-child(2) {
        margin-left: 5.7rem;
        margin-top: -0.4rem;
      }
    }

  }
`;

export const Li = styled.li`
  padding-bottom: 0.9rem;
  margin-right: 4.38rem;
  margin-left: 1.25rem;

  @media (max-width: 1100px) {
    width: 80%;
    padding-left: 1rem;
  }

  @media (max-width: 800px) {
    margin-right: 1rem;
    margin-left: 0.9rem;
  }

  @media (max-width: 500px) {
  }
`;

export const LinksSupport = styled.a`
  font-size: 15px;
  font-weight: 300;
  color: hsl(0, 0%, 100%);

  &:hover {
    color: hsl(136, 65%, 51%);
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    width: 40px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 340px) {
    margin-right: 2.5rem;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: hsl(233, 8%, 62%);
  margin-top: 1.56rem;
  margin-right: 3.12rem;
  padding-right: 3.12rem;

  @media (max-width: 1100px) {
    width: 100%;
    margin-left: 1.5rem;
  }

  @media (max-width: 800px) {
    margin-left: 5rem;
  }

  @media (max-width: 500px) {
    margin-left: 6.5rem;
  }

  @media (max-width: 340px) {
    margin-left: 1.5rem;
  }

`;
