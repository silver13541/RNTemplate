import React from 'react'
import styled from 'styled-components/native'

import { RadioButton } from './radio-button'

const MapContainer = styled.View`
  border-top-width: 0.4px;
  border-bottom-width: 0.4px;
  padding-left: 19px;
  width: 100%;
  margin-bottom: 30px;
`

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 43px;
`

const TextContainer = styled.View`
  border-bottom-width: 0.2px;
  margin-left: 16px;
  height: 43px;
  flex: 1;
`

const StatusText = styled.Text`
  padding-top: 10.5px;
  font-size: 17px;
  line-height: 22px;
`

interface IProps {
  array: string[]
  filterItem: string
  setFilter: (string: string) => void
}

export const FilterContainer = ({ filterItem, array, setFilter }: IProps) => {
  const onPress = (item: string) => {
    setFilter(item)
  }

  return (
    <MapContainer>
      {array.map((item) => (
        <ItemContainer key={item} onPress={() => onPress(item)}>
          <RadioButton isChecked={item === filterItem} />
          <TextContainer>
            <StatusText>{item}</StatusText>
          </TextContainer>
        </ItemContainer>
      ))}
    </MapContainer>
  )
}
