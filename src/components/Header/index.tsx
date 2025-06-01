import SearchInput from "../SearchInput";
import { ContainerHeader, Logo } from "./style";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <ContainerHeader>
      <Logo>
        Bloom Store
      </Logo>
      {/* <SearchInput type='text' placeholder="Pesquise aqui..." /> */}
      <FaCartShopping size={24} color="#fff"/>
      <SearchInput type='text' placeholder="Pesquise aqui..." />

    </ContainerHeader>
  )
}