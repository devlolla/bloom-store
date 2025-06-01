import styled from "styled-components";

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 368px;
  height: 32px;

  svg {
    position: absolute;
    top: 5px;
    left: 8px;
  }

  @media (max-width: 857px) {
    max-width: 100%;
  }
`

export const InputStyled = styled.input`
  width: 100%;
  
  border: none;
  border-radius: 18px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 8px 40px;

  &::placeholder {
    font-weight: 400;
    color: #9296AC !important;
    font-size: 14px !important;
  }

  &:focus {
    outline: none;
  }

 
`