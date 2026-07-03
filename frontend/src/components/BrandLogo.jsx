import { useEffect, useRef, useState } from 'react'
import logoSrc from '../assets/logo.png'

function useTransparentLogo(src) {
  const [url, setUrl] = useState(null)
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 230 && data[i + 1] > 230 && data[i + 2] > 230) {
          data[i + 3] = 0
        }
      }
      const id = ctx.createImageData(canvas.width, canvas.height)
      id.data.set(data)
      ctx.putImageData(id, 0, 0)
      setUrl(canvas.toDataURL('image/png'))
    }
    img.src = src
  }, [src])
  return url
}

export default function BrandLogo({ size = 48, className = '' }) {
  const processed = useTransparentLogo(logoSrc)
  if (!processed) return <div style={{ width: size, height: size }} />
  return (
    <img
      src={processed}
      alt="HarAm Innovations"
      style={{ width: size, height: size, objectFit: 'contain' }}
      className={className}
    />
  )
}
