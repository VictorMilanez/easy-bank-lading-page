import { ButtonInvite } from "./StyledButton";

export const Button = ({buttonLabel, $isMenu, isFirstSection, isFooter}) => {

    return (
        <ButtonInvite $isMenu={$isMenu} $isFirstSection={isFirstSection} $isFooter={isFooter}>{buttonLabel}</ButtonInvite>
    )
}