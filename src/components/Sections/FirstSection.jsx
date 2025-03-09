import { Button } from "../Buttons/Button";
import { FirstDiv, SecondDiv, SectionFirst, Title1, P1, Img1, Img2, Picture2 } from "./StyledFirstSection";

export const FirstSection = ({ title, text, images}) => {

    return (
        <SectionFirst>
            <FirstDiv>
                <div>
                    <Title1>{title}</Title1>
                    <P1>{text}</P1>
                </div>
                <Button buttonLabel="Request Invite" isFirstSection />
            </FirstDiv>

            <SecondDiv>
                <picture>
                    <source srcSet={images.mobile} media="(max-width: 768px)" />
                    <Img1 src={images.desktop} alt="Banner" />
                </picture>

                <Picture2>
                    <Img2 src={images.mockup} alt="Banner App" />
                </Picture2>
            </SecondDiv>
        </SectionFirst>

    )
}