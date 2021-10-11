import React from 'react'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'

interface IProps {
  isChecked?: boolean
}

export const Button = styled.View<IProps>`
  width: 22px;
  height: 22px;
  background-color: ${ifProp('isChecked', colors.indigo, 'transparent')};
  border-radius: 11px;
  border: 1.5px solid ${colors.gray[4]};
`

interface IRadioButton {
  isChecked: boolean
}

export const RadioButton = ({ isChecked }: IRadioButton) => {
  return <Button isChecked={isChecked} />
}
