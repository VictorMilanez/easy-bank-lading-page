import styled from "styled-components";

export const ArticlesContainer = styled.article`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0.5rem 1.9rem;
    background-color: hsl(0, 0%, 98%);

    @media (max-width: 500px) {
        margin-left: 3rem;
    }


`

export const Title = styled.h1`
    display: block;
    align-self: start;
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 2.8rem;
    margin-top: 7.19rem;
    padding-left: 7.5rem;
    color: hsl(233, 26%, 24%);

    @media (max-width: 500px){
        font-size: 35px;
        padding-left: 2rem;
    }

    @media (max-width: 400px) {
        margin-right: 5rem;
        width: 100%;
    }

    @media (max-width: 340px) {
        padding-left: 1rem;
        width: 100%;
    }
`

export const ArticlesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 300px));

    @media (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 350px);
    }

    @media (max-width:500px){ 
        grid-template-columns: repeat(1,425px);
    }

`

export const ArticlesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 1440px;
    margin-left: 7.5rem;
    margin-bottom: 5.63rem;

    @media (max-width: 800px){
        width: 60%;
    }

    @media (max-width: 500px) {
        margin-left: 4rem;
    }

    @media (max-width: 400px) {
        margin-left: 2rem;
    }

    @media (max-width: 340px) {
        margin-left: 0.5rem;
    }
`

export const ImgContainer = styled.div`
    width: 100%;
    max-width: 245px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgArticles = styled.img`
    width: 100%;
    max-width: 245px;
    height: 200px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 1.57rem;

    @media (max-width: 400px) {
        width: 400px;
        max-width: 400px;
    }
`

export const InfoArticles = styled.div`
    width: 100%;
    max-width: 245px;
    background-color: hsl(0, 0%, 100%)  ;
`

export const CreditsArticles = styled.p`
    font-size: 10px;
    font-weight: 300;
    padding-left: 1.25rem;
    padding-bottom: 0.63rem;
    color: hsl(233, 8%, 62%)
`

export const TitleArticle = styled.h3`
    font-weight: 400;
    padding-left: 1.25rem;
    padding-bottom: 0.63rem;
    padding-right: 0.63rem;

`

export const TextArticle = styled.p`
    font-size: 15px;
    font-weight: 300;
    color: hsl(233, 8%, 62%);
    padding-left: 1.25rem;
`

export const LinkArticle = styled.a`
    color: hsl(233, 26%, 24%);
    
    &:hover {
        color: hsl(136, 65%, 51%);
        fill: hsl(136, 65%, 51%);
    }
`


