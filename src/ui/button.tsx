import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'

const ButtonBlock = styled.TouchableOpacity<{ isDisabled?: boolean }>`
  opacity: ${ifProp('isDisabled', '0.55', '1')};
  padding: 5px 12px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
  font-size: 13px;
  line-height: 18px;
`

interface Props extends TouchableOpacityProps {
  title?: string
  children?: ReactNode
  onPress?: () => void
}

export const Button = ({ children, onPress, title, ...rest }: Props) => {
  return (
    <ButtonBlock
      isDisabled={Boolean(rest.disabled)}
      onPress={onPress}
      {...rest}>
      <Title>{title}</Title>
      {children}
    </ButtonBlock>
  )
}
