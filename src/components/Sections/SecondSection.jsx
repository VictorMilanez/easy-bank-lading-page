import { SectionSecond, FirstDiv, SecondDiv, Div, H3, Title2, P2 } from "./StyledSecondSection"

export const SecondSection = ({ title, text, iconsItems }) => {
    return (
        <SectionSecond>
            <FirstDiv>
                <Title2>{title}</Title2>
                <P2>{text}</P2>
            </FirstDiv>

            <SecondDiv>
                {iconsItems.map((item, index) => {
                    return (
                        <Div key={index}>
                            <img src={item.image} alt={`Icone ${item.title}`} />
                            <H3>{item.title}</H3>
                            <P2>{item.text}</P2>
                        </Div>
                    )
                })}
            </SecondDiv>
        </SectionSecond >
    )
}

