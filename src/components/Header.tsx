import { useEffect, useState } from 'react'

interface HeaderProps {
  onCtaClick: () => void
}

export function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Usando uma detecção muito mais robusta para todos os navegadores
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollPos > 10)
    }
    
    // Adiciona múltiplos listeners para garantir a detecção
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchmove', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    
    // Executa uma vez no carregamento
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-[200] w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#0B1A30]/60 backdrop-blur-[20px] py-3 shadow-2xl border-b border-[#D4AF37]/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="relative z-[220] flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Solange Bezerra Advocacia"
            className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        <button
          onClick={onCtaClick}
          className="group relative z-[220] overflow-hidden rounded-full border border-[#D4AF37] px-4 py-2 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 hover:text-[#0B1A30] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 bg-[#0B1A30]/50 hover:bg-[#D4AF37] backdrop-blur-sm"
        >
          <span className="relative z-10">AGENDAR CONSULTA</span>
          <div className="shimmer-overlay"></div>
        </button>
      </div>
    </header>
  )
}
