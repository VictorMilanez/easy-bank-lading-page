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
`
export const FirstDiv = styled.div`
    display: block;
    align-self: start;
    height: 100%;
    width: 100%;
    max-width: 600px;
    margin-left: 9.40rem;
    padding-bottom: 2.19rem;
    padding-top: 3.8rem;
    overflow: visible;

    @media (max-width: 800px){
        margin-left: 8rem;
    }

    @media (max-width: 500px){
        margin-left: 3rem;
    }
`

export const SecondDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 3rem;
    width: 100%;

    @media (max-width: 1100px) {
        width: 95%;
        margin-left: 1rem;
    }

    @media (max-width: 800px){
        margin-right: 4rem;
        width: 60%;
    }
`

export const Title2 = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: hsl(233, 26%, 24%);
    padding-bottom: 1.56rem;
`

export const H3 = styled.h3`
    font-size: 23px;
    font-weight: 300;
    padding-bottom: 25px;
    padding-top: 35px;
`
export const P2 = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: hsl(233, 8%, 62%);
    padding-bottom: 2.2rem;
    line-height: 1.56rem;
    max-width: 90%;
`

export const Div = styled.div`
    width: 190px;
    margin-left: 8rem;

    @media (max-width: 800px){
        margin-left: 0.5rem;
        margin-right: 2rem;
    }

    @media (max-width: 500px){
        margin-left: 4rem;
        margin-right: 0;
    }
`