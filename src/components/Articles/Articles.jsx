import { ArticlesCard, ArticlesContainer, ArticlesGrid, CreditsArticles, ImgArticles, ImgContainer, InfoArticles, LinkArticle, TextArticle, Title, TitleArticle } from "./StyledArticles";


export const Articles = ({ title, articleItems }) => {

    return (
        <ArticlesContainer>
            <Title>{title}</Title>
            <ArticlesGrid>
                {articleItems.map((article, index) => {
                    return (
                        <ArticlesCard key={index}>
                            <ImgContainer>
                                <ImgArticles src={article.image} alt={article.title} />
                            </ImgContainer>
                            <InfoArticles>
                                <CreditsArticles>{article.credits}</CreditsArticles>
                                <TitleArticle><LinkArticle href="#">{article.title}</LinkArticle></TitleArticle>
                                <TextArticle>{article.text}</TextArticle>
                            </InfoArticles>
                        </ArticlesCard>
                    )
                })}
            </ArticlesGrid>
        </ArticlesContainer>
    )
}
