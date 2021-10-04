import React from 'react'

import {
  ItemContainer,
  MapContainer,
  RadioButton,
  StatusText,
  TextContainer,
} from './modal-filter'

interface IGender {
  gender: string[]
  checkedGender: number
  setCheckedGender: React.Dispatch<React.SetStateAction<number>>
}

export const Gender = ({
  gender,
  checkedGender,
  setCheckedGender,
}: IGender) => {
  return (
    <MapContainer>
      {gender.map((item, key) => (
        <ItemContainer key={item} onPress={() => setCheckedGender(key)}>
          <RadioButton isChecked={checkedGender === key} />
          <TextContainer>
            <StatusText>{item}</StatusText>
          </TextContainer>
        </ItemContainer>
      ))}
    </MapContainer>
  )
}
