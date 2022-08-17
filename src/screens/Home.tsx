import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { Input } from '../components/Input'
import { Link } from '../components/Link'
import { Download } from 'phosphor-react'

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
      <Input
        value={link}
        onchange={e => handleQrCode(e)}
        placeholder="Insira sua URL"
      />

      {link.length >= 1 && (
        <Link
          icon={Download}
          link={qrCodeLink}
          title="Faça download do seu Qr"
          color="#0096c7"
          download={`qr.png`}
        />
      )}

      <QRCode value={link} />
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
