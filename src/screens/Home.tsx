import styled from 'styled-components'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { useState } from 'react'
import { Download } from 'phosphor-react'
import * as Component from '../components'

export function Home() {
  const [link, setLink] = useState('')
  const [qrCodeLink, setQrCodeLink] = useState('')

  function handleGenerateQR(link_url: any) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 2
      },
      function (err, url) {
        setQrCodeLink(url)
      }
    )
  }

  function handleQrCode(e: any) {
    setLink(e.target.value)
    handleGenerateQR(e.target.value)
  }

  return (
    <HomeContainer>
      <TextContainer>
        <Component.Paragraph title="Gere seu QRCODE !!" alignItems="center" />
      </TextContainer>
      <Component.Input
        value={link}
        onchange={e => handleQrCode(e)}
        placeholder="Insira sua URL"
      />

      {link.length >= 1 && (
        <Component.Link
          icon={Download}
          link={qrCodeLink}
          title="Faça download do seu Codigo QR"
          color="#0096c7"
          download={`qr.png`}
        />
      )}

      <QRCode value={link} />

      <TextContainer>
        <Component.Paragraph
          paragraph="Pra que serve o QRCODE?"
          span="O QR Code é uma evolução do código de barras — que existe desde 1970 e revolucionou a identificação de produtos. Ele consiste em um gráfico 2D (o código de barras comum usa apenas uma dimensão, a horizontal, enquanto o QR usa a vertical e a horizontal) que pode ser lido pelas câmeras da maioria dos celulares (alguns modelos ainda requerem aplicativos específicos para isso)."
        />
        <Component.Paragraph
        
          paragraph="Porque ter meu proprio QR?"
          span="Através de um código QR, o usuário pode receber informações como URL de sites, telefones de contato, textos, geolocalização, e-mail e SMS, o que torna essa tecnologia útil em diversas frentes. O QR code pode ser usado para receber pagamentos presenciais e online, mas os benefícios não param por aí."
        />
      </TextContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  gap: 1rem;
  padding: 1rem;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
