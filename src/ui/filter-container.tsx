import React from 'react'
import styled from 'styled-components/native'

import { RadioButton } from 'src/modules/character/modal-filter'

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
  data: string[]
  checked: number
  setChecked: React.Dispatch<React.SetStateAction<number>>
}

export const FilterContainer = ({ data, checked, setChecked }: IProps) => {
  return (
    <MapContainer>
      {data.map((item, key) => (
        <ItemContainer key={item} onPress={() => setChecked(key)}>
          <RadioButton isChecked={checked === key} />
          <TextContainer>
            <StatusText>{item}</StatusText>
          </TextContainer>
        </ItemContainer>
      ))}
    </MapContainer>
  )
}
