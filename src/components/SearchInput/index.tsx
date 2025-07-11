import { ContainerInput, InputStyled } from "./style";

import { IoSearch } from "react-icons/io5";

type SearchInputProps = {
  type: string,
  name?: string,
  id?: string,
  placeholder?: string,
  onChange: (value: string) => void
}

export default function SearchInput ({
  type, 
  name, 
  id, 
  placeholder,
  onChange
}: SearchInputProps) {
  return (
    <ContainerInput>
      <IoSearch size={22} color="#0B1A8E" />
      <InputStyled 
        type={type} 
        name={name} 
        id={id} 
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      />
    </ContainerInput>
  )
}