import styled from 'styled-components'

type InputProps = {
  placeholder: string
  value: string
  onchange: (e: any) => void
}

export function Input({ placeholder, value, onchange }: InputProps) {
  return (
    <InputArea placeholder={placeholder} value={value} onChange={onchange} />
  )
}

const InputArea = styled.input`
  background: none;
  border: none;
  border: 2px solid #e3d5ca;
  border-radius: 0.3rem;
  color: #fff;
  padding: 0.6rem;
  max-width: 30rem;
  width: 100%;
  outline: none;
  
  ::placeholder{
    color: #fff;
    opacity: 0.7;
  }
`
