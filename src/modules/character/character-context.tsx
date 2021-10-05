import React, {
  createContext,
  ReactElement,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

import { FilterCharacter } from 'src/generated/graphql'

type MyContext = {
  name: FilterCharacter['name']
  setName: React.Dispatch<SetStateAction<FilterCharacter['name']>>
  species: FilterCharacter['species']
  setSpecies: React.Dispatch<SetStateAction<FilterCharacter['species']>>
  status: FilterCharacter['status']
  setStatus: React.Dispatch<SetStateAction<FilterCharacter['status']>>
  gender: FilterCharacter['gender']
  setGender: React.Dispatch<SetStateAction<FilterCharacter['gender']>>
}

type Props = {
  children: React.ReactNode
}

const initialState: MyContext = {
  name: '',
  setName: (setName) => setName,
  species: '',
  setSpecies: (setSpecies) => setSpecies,
  status: '',
  setStatus: (setStatus) => setStatus,
  gender: '',
  setGender: (setGender) => setGender,
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

export const useCharacterContext = (): MyContext => useContext(CharacterContext)
