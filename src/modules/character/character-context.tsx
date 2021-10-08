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
  filtersCharacters: FilterCharacter
  applyFiltersCharacters: FilterCharacter
  setFiltersCharacters: Dispatch<SetStateAction<FilterCharacter>>
  setApplyFiltersCharacters: Dispatch<SetStateAction<FilterCharacter>>
  setFilterName: (value: string) => void
  setFilterGender: (value: string) => void
  setFilterStatus: (value: string) => void
  setFilterSpecies: (value: string) => void
}

type Props = {
  children: React.ReactNode
}

export const ModelFilters = {
  name: '',
  gender: '',
  status: '',
  species: '',
}

const initialState: Context = {
  filtersCharacters: { ...ModelFilters },
  applyFiltersCharacters: { ...ModelFilters },
  setApplyFiltersCharacters: noop,
  setFiltersCharacters: noop,
  setFilterName: noop,
  setFilterGender: noop,
  setFilterStatus: noop,
  setFilterSpecies: noop,
}

export const CharacterContext = createContext(initialState)

export const CharacterContextProvider = ({ children }: Props): ReactElement => {
  const [filtersCharacters, setFiltersCharacters] = useState({
    ...ModelFilters,
  })
  const [applyFiltersCharacters, setApplyFiltersCharacters] = useState({
    ...ModelFilters,
  })

  const setFilterName = (value: string) => {
    setFiltersCharacters((prev) => ({ ...prev, name: value }))
  }

  const setFilterGender = (value: string) => {
    setFiltersCharacters((prev) => ({ ...prev, gender: value }))
  }

  const setFilterStatus = (value: string) => {
    setFiltersCharacters((prev) => ({ ...prev, status: value }))
  }

  const setFilterSpecies = (value: string) => {
    setFiltersCharacters((prev) => ({ ...prev, species: value }))
  }
  const value = useMemo(
    () => ({
      filtersCharacters,
      applyFiltersCharacters,
      setFiltersCharacters,
      setApplyFiltersCharacters,
      setFilterSpecies,
      setFilterName,
      setFilterGender,
      setFilterStatus,
    }),
    [filtersCharacters, applyFiltersCharacters],
  )

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterContext = (): Context => useContext(CharacterContext)
