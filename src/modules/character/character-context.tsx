import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { FilterCharacter } from 'src/generated/graphql'

type Context = {
  name: FilterCharacter['name']
  setName: Dispatch<SetStateAction<FilterCharacter['name']>>
  species: FilterCharacter['species']
  setSpecies: Dispatch<SetStateAction<FilterCharacter['species']>>
  status: FilterCharacter['status']
  setStatus: Dispatch<SetStateAction<FilterCharacter['status']>>
  gender: FilterCharacter['gender']
  setGender: Dispatch<SetStateAction<FilterCharacter['gender']>>
}

type Props = {
  children: React.ReactNode
}

const initialState: Context = {
  name: '',
  setName: noop,
  species: '',
  setSpecies: noop,
  status: '',
  setStatus: noop,
  gender: '',
  setGender: noop,
}

export const CharacterContext = createContext(initialState)

export const CharacterContextProvider = ({ children }: Props): ReactElement => {
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')

  const value = useMemo(
    () => ({
      name,
      setName,
      species,
      setSpecies,
      status,
      setStatus,
      gender,
      setGender,
    }),
    [name, setName, species, setSpecies, status, setStatus, gender, setGender],
  )

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterContext = (): Context => useContext(CharacterContext)
