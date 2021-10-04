import React from 'react'

import {
  ItemContainer,
  MapContainer,
  RadioButton,
  StatusText,
  TextContainer,
} from './modal-filter'

interface IStatus {
  status: string[]
  checkedStatus: number
  setCheckedStatus: React.Dispatch<React.SetStateAction<number>>
}

export const Status = ({
  status,
  checkedStatus,
  setCheckedStatus,
}: IStatus) => {
  return (
    <MapContainer>
      {status.map((item, key) => (
        <ItemContainer key={item} onPress={() => setCheckedStatus(key)}>
          <RadioButton isChecked={checkedStatus === key} />
          <TextContainer>
            <StatusText>{item}</StatusText>
          </TextContainer>
        </ItemContainer>
      ))}
    </MapContainer>
  )
}
