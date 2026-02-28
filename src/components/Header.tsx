import { useEffect, useState } from 'react'

interface HeaderProps {
  onCtaClick: () => void
}

export function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#0B1A30]/85 py-4 shadow-2xl backdrop-blur-md border-b border-[#D4AF37]/30'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Solange Bezerra Advocacia"
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        <button
          onClick={onCtaClick}
          className={`group relative overflow-hidden rounded-full border border-[#D4AF37] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 hover:text-[#0B1A30] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${
            isScrolled ? 'bg-transparent hover:bg-[#D4AF37]' : 'bg-[#0B1A30]/50 hover:bg-[#D4AF37] backdrop-blur-sm'
          }`}
        >
          <span className="relative z-10">AGENDAR CONSULTA</span>
          <div className="shimmer-overlay"></div>
        </button>
      </div>
    </header>
  )
}
