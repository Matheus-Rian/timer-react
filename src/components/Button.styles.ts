import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning'

type ButtonProps = {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'green',
  warning: 'yellow',
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`
