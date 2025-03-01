import { Button } from "../Buttons/Button"
import logo from "../../images/logo.svg"
import iconFacebook from "../../images/icon-facebook.svg"
import iconInstagram from "../../images/icon-instagram.svg"
import iconPinterest from "../../images/icon-pinterest.svg"
import iconTwitter from "../../images/icon-twitter.svg"
import iconYoutube from "../../images/icon-youtube.svg"
import { Div, DivSupport, FooterPage, Icons, Img, Li, LinkIcons, LinksSupport, LogoIcons, Text, Ul } from "./StyledFooter"

export const Footer = ({ footerItems }) => {

    return (
        <FooterPage>
            <LogoIcons>
                <Img src={logo} alt="Logo Easybank" />

                <Icons>
                    <LinkIcons href="#"><img src={iconFacebook} alt="Icone Facebook" /></LinkIcons>
                    <LinkIcons href="#"><img src={iconYoutube} alt="Icone Youtube" /></LinkIcons>
                    <LinkIcons href="#"><img src={iconTwitter} alt="Icone Twitter" /></LinkIcons>
                    <LinkIcons href="#"><img src={iconPinterest} alt="Icone Pinterest" /></LinkIcons>
                    <LinkIcons href="#"><img src={iconInstagram} alt="Icone Instagram" /></LinkIcons>
                </Icons>
            </LogoIcons>

            <DivSupport>
                <Ul>
                    {footerItems.slice(0, 3).map((item, index) => {
                        return (
                            <Li key={index}>
                                <LinksSupport href={item.link}>{item.text}</LinksSupport>
                            </Li>
                        )
                    })}
                </Ul>

                <Ul>
                    {footerItems.slice(3, 6).map((item, index) => {
                        return (
                            <Li key={index}>
                                <LinksSupport href={item.link}>{item.text}</LinksSupport>
                            </Li>
                        )
                    })}
                </Ul>
            </DivSupport>

            <Div>
                <Button buttonLabel="Request Invite" />

                <Text>© Easybank. All rights Reserved</Text>
            </Div>
        </FooterPage>
    )
}