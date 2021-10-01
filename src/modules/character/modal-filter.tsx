import React, { useState } from 'react'
import styled from 'styled-components/native'

import { Arrow } from 'src/assets/images/icons/Arrow'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'

const Container = styled.View`
  background-color: ${colors.white};
  align-items: center;
`

const FilterApplyContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 26.5px;
`

const FilterText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  margin-top: 21px;
  margin-right: 95px;
`

const B = styled(Button)`
  background-color: ${colors.indigo};
  height: 28px;
  margin-top: 18px;
  margin-right: 15px;
`

const ContainerSelect = styled.TouchableOpacity`
  width: 100%;
  border-top-width: 0.4px;
  border-bottom-width: 0.4px;
  align-items: center;
  padding: 9.5px 16px 9.5px 19px;
  flex-direction: row;
  margin-bottom: 19px;
`

const RadioButton = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.color || 'transparent'};
  border-radius: 11px;
  border: 1.5px solid ${colors.gray[4]};
`

const SelectNameContainer = styled.View`
  padding-left: 16px;
  width: 319px;
`

const SelectText = styled.Text`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
`

const SelectPrompt = styled.Text`
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[1]};
`

const ArrowContainer = styled.View`
  padding: 7px;
`

const HeadLine = styled.Text`
  align-self: flex-start;
  padding-left: 16px;
  padding-bottom: 8.5px;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[6]};
`

const MapContainer = styled.View`
  border-top-width: 0.4px;
  border-bottom-width: 0.4px;
  padding-left: 19px;
  width: 100%;
  margin-bottom: 30px;
`

const ItemContainer = styled.View`
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

export const ModalFilter = () => {
  const [checkedGender, setCheckedGender] = useState(0)
  const [checkedStatus, setCheckedStatus] = useState(0)
  const status = ['Alive', 'Dead', 'Unknown']
  const gender = ['Female', 'Male', 'Genderless', 'Unknown']

  return (
    <Container>
      <FilterApplyContainer>
        <FilterText>Filter</FilterText>
        <B title={'APPLY'} />
      </FilterApplyContainer>
      <ContainerSelect>
        <RadioButton />
        <SelectNameContainer>
          <SelectText>Name</SelectText>
          <SelectPrompt>Give a name</SelectPrompt>
        </SelectNameContainer>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </ContainerSelect>
      <ContainerSelect>
        <RadioButton />
        <SelectNameContainer>
          <SelectText>Species</SelectText>
          <SelectPrompt>Select one</SelectPrompt>
        </SelectNameContainer>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </ContainerSelect>
      <HeadLine>Status</HeadLine>
      <MapContainer>
        {status.map((item, key) => (
          <ItemContainer>
            {checkedStatus === key ? (
              <>
                <RadioButton color={colors.indigo} />
                <TextContainer>
                  <StatusText>{item}</StatusText>
                </TextContainer>
              </>
            ) : (
              <>
                <RadioButton
                  onPress={() => {
                    setCheckedStatus(key)
                  }}
                />
                <TextContainer>
                  <StatusText>{item}</StatusText>
                </TextContainer>
              </>
            )}
          </ItemContainer>
        ))}
      </MapContainer>
      <HeadLine>Gender</HeadLine>
      <MapContainer>
        {gender.map((item, key) => (
          <ItemContainer key={item}>
            {checkedGender === key ? (
              <>
                <RadioButton color={colors.indigo} />
                <TextContainer>
                  <StatusText>{item}</StatusText>
                </TextContainer>
              </>
            ) : (
              <>
                <RadioButton
                  onPress={() => {
                    setCheckedGender(key)
                  }}
                />
                <TextContainer>
                  <StatusText>{item}</StatusText>
                </TextContainer>
              </>
            )}
          </ItemContainer>
        ))}
      </MapContainer>
    </Container>
  )
}
