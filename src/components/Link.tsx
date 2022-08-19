import { IconProps } from 'phosphor-react'
import React from 'react'
import styled from 'styled-components'

type LinkProps = {
  icon: React.ElementType<IconProps>
  link: string
  title: string
  color: string
  download?: string
}

export function Link({ icon: Icon, link, title, color, download }: LinkProps) {
  return (
    <LinkContainer>
      <Icon size={32} color={color} />
      <LinkArea style={{ color: `${color}` }} href={link} download={download}>
        {title}
      </LinkArea>
    </LinkContainer>
  )
}

const LinkArea = styled.a`
  text-decoration: none;
  font-size: 1rem;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`