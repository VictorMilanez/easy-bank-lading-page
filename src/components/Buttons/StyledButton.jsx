import styled from "styled-components";

export const ButtonInvite = styled.button`
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  border: none;
  color: hsl(0, 0%, 100%);
  padding: 15px 40px;
  margin-right: 50px;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 700;
  max-width: 172px;

  &:hover {
    opacity: 0.5;
  }

  ${({ $isMenu }) =>
    $isMenu &&
    `
        @media (max-width: 500px) {
            display: none;
        }
    `}

  ${({ $isFirstSection }) =>
    $isFirstSection &&
    `
        @media (max-width: 500px) {
            margin-left: 3rem
        }
    `}

${({ $isFooter }) =>
    $isFooter &&
    `
        @media (max-width: 500px) {
            margin-right: 9rem;
            margin-top: 0.5rem
        }

        @media (max-width: 400px) {
            margin-right: 11rem;
            margin-top: 0.5rem
        }
    `}
`;
