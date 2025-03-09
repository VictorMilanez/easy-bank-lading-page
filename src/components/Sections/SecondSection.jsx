import { SectionSecond, FirstDiv, SecondDiv, Div, H3, Title2, Img, FirstP, SecondP } from "./StyledSecondSection"

export const SecondSection = ({ title, text, iconsItems }) => {
    return (
        <SectionSecond>
            <FirstDiv>
                <Title2>{title}</Title2>
                <FirstP>{text}</FirstP>
            </FirstDiv>

            <SecondDiv>
                {iconsItems.map((item, index) => {
                    return (
                        <Div key={index}>
                            <Img src={item.image} alt={`Icone ${item.title}`} />
                            <H3>{item.title}</H3>
                            <SecondP>{item.text}</SecondP>
                        </Div>
                    )
                })}
            </SecondDiv>
        </SectionSecond >
    )
}

