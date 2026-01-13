import { useEffect, useState } from "react"

const images = [
  "/images/Bmw1000.jpg",
  "/images/Ducati.jpg",
  "/images/azulyamaha.jpg",
  "/images/Ducati.jpg",
]

export default function Homecarrusel() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(new Set())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Precargar imágenes
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setLoaded((prev) => new Set([...prev, src]))
      }
    })
  }, [])

  const handleImageLoad = (src: string) => {
    setLoaded((prev) => new Set([...prev, src]))
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {images.map((img, index) => (
        <img
          key={`${img}-${index}`}
          src={img}
          alt={`Slide ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => handleImageLoad(img)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
            ${index === current ? "opacity-100" : "opacity-0"}
            ${loaded.has(img) ? "" : "blur-sm"}
          `}
          style={{
            imageRendering: "-webkit-optimize-contrast",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            willChange: index === current || index === (current + 1) % images.length ? "opacity" : "auto"
          } as React.CSSProperties}
        />
      ))}

      {/* Overlay oscuro opcional */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}