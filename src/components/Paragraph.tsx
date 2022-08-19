import styled from 'styled-components'

type ParagraphProps = {
  title?: string
  paragraph?: string
  span?: string
  alignItems?: 'left' | 'center' | 'right'
}

export function Paragraph({ title, paragraph, span, alignItems }: ParagraphProps) {
  return (
    <ParagraphContainer style={{
      alignItems: `${alignItems}`
    }}>
      <ParagraphTitle>{title}</ParagraphTitle>
      <ParagraphText>{paragraph}</ParagraphText>
      <ParagraphSpan>{span}</ParagraphSpan>
    </ParagraphContainer>
  )
}

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
`

const ParagraphTitle = styled.h1`
  font-size: 1.1rem;
  color: #fff;
`

const ParagraphText = styled.p`
  font-size: 1rem;
  color: #fff;
`

const ParagraphSpan = styled.span`
  font-size: 0.9rem;
  color: #fff;
  opacity: 0.7;
`
