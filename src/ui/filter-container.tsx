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
  children: string[]
  setFilter: React.Dispatch<React.SetStateAction<string>>
  data: string
}

export const FilterContainer = ({ children, setFilter, data }: IProps) => {
  return (
    <MapContainer>
      {children.map((item, key) => (
        <ItemContainer
          key={item}
          onPress={() => {
            setFilter(children[key])
          }}>
          <RadioButton isChecked={children.indexOf(data) === key} />
          <TextContainer>
            <StatusText>{item}</StatusText>
          </TextContainer>
        </ItemContainer>
      ))}
    </MapContainer>
  )
}
