import { useState, useEffect, useRef } from 'react'
import { MessageCircle, Scale, Shield, Users, Activity, AlertOctagon, X, ChevronLeft, ChevronRight, Instagram, MapPin, Star } from 'lucide-react'
import { AuthorityCard } from '../components/AuthorityCard'
import { Header } from '../components/Header'

export function LandingElite() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const [formData, setFormData] = useState<{
    natureza?: 'Trabalhista' | 'Defesa Empresarial' | 'Sindical' | 'Acidente/Assédio'
    urgencia?: 'Imediata (Risco Atual)' | 'Alta (Processo em Andamento)' | 'Preventiva (Consultoria)'
    nome?: string
    whatsapp?: string
    email?: string
    observacao?: string
  }>({})
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const modulesRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const modalPanelRef = useRef<HTMLDivElement>(null)
  const termsModalRef = useRef<HTMLDivElement>(null)
  const termsPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      const prevBody = document.body.style.overflow
      const prevHtml = document.documentElement.style.overflow
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      modalRef.current?.focus()
      modalPanelRef.current?.scrollIntoView({ block: 'center' })
      return () => {
        document.body.style.overflow = prevBody
        document.documentElement.style.overflow = prevHtml
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isTermsOpen) {
      const prevBody = document.body.style.overflow
      const prevHtml = document.documentElement.style.overflow
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      termsModalRef.current?.focus()
      termsPanelRef.current?.scrollIntoView({ block: 'center' })
      return () => {
        document.body.style.overflow = prevBody
        document.documentElement.style.overflow = prevHtml
      }
    }
  }, [isTermsOpen])
 
  

  function startLeadFlow() {
    setIsOpen(true)
    setCurrentStep(1)
  }

  function closeModal() {
    setIsOpen(false)
    setCurrentStep(1)
    setFormData({})
  }

  function selectNatureza(value: 'Trabalhista' | 'Defesa Empresarial' | 'Sindical' | 'Acidente/Assédio') {
    setFormData((d) => ({ ...d, natureza: value }))
    setCurrentStep(2)
  }

  function selectUrgencia(
    value: 'Imediata (Risco Atual)' | 'Alta (Processo em Andamento)' | 'Preventiva (Consultoria)',
  ) {
    setFormData((d) => ({ ...d, urgencia: value }))
    setCurrentStep(3)
  }

  function updateField<K extends 'nome' | 'whatsapp' | 'observacao' | 'email'>(key: K, value: string) {
    setFormData((d) => ({ ...d, [key]: value }))
  }

  function submitFinal() {
    const nome = formData.nome?.trim()
    const whatsapp = formData.whatsapp?.trim()
    if (!nome || !whatsapp || !formData.natureza || !formData.urgencia) return

    const lines = [
      '*Novo Lead – Advocacia de Combate*',
      `• Natureza: ${formData.natureza}`,
      `• Urgência: ${formData.urgencia}`,
      `• Nome: ${nome}`,
      `• WhatsApp: ${whatsapp}`,
      formData.observacao?.trim() ? `• Observação: ${formData.observacao.trim()}` : '',
    ]
    const text = encodeURIComponent(lines.filter(Boolean).join('\n'))
    const url = `https://wa.me/5561984713926?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
    closeModal()
  }
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden text-white">

      <div className="relative min-h-full backdrop-blur-sm">
        <Header onCtaClick={startLeadFlow} />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
        <section className="relative">
          <div className="max-w-3xl">
            <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Defesa Jurídica Estratégica para a Preservação de Direitos e Patrimônio
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
              Unimos a experiência em liderança institucional e a atuação na OAB para entregar uma estrutura de suporte jurídico de alta precisão. Nosso compromisso é com o planejamento rigoroso e a fundamentação necessária para garantir a segurança em cada etapa do seu processo.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={startLeadFlow}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#D4AF37] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] bg-[#0B1A30]/50 hover:bg-[#D4AF37] hover:text-[#0B1A30] backdrop-blur-sm"
              >
              <span className="relative z-10 inline-flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
                Acionar Dra. Solange
              </span>
              <div className="absolute inset-0 shimmer-overlay"></div>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-base sm:text-xl font-extrabold tracking-wide text-white uppercase">
              ESFERAS DE ATUAÇÃO
            </h2>
          </div>
        </section>

        <section className="mt-4 sm:mt-5">
          <div className="relative group">
            <button
              onClick={() => modulesRef.current?.scrollBy({ left: -(modulesRef.current.clientWidth * 0.8), behavior: 'smooth' })}
              className="neon-pulse absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-1.5 sm:p-2 text-[#D4AF37]/60 opacity-0 transition-all duration-300 hover:opacity-100 group-hover:opacity-100 focus:opacity-100 bg-transparent border border-transparent backdrop-blur-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          <div
            ref={modulesRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory px-1 sm:px-2 py-8 sm:py-10 [&::-webkit-scrollbar]:hidden"
          >
              <div className="snap-start shrink-0 basis-[68%] sm:basis-[42%] md:basis-[26%] lg:basis-[18%]">
                <AuthorityCard
                  icon={<Scale className="h-6 w-6" aria-hidden="true" />}
                  title="Direito Trabalhista"
                  description="Assessoria jurídica voltada à recomposição de valores não quitados, horas extras devidas e demais direitos suprimidos no encerramento contratual."
                />
              </div>
              <div className="snap-start shrink-0 basis-[68%] sm:basis-[42%] md:basis-[26%] lg:basis-[18%]">
                <AuthorityCard
                  icon={<Shield className="h-6 w-6" aria-hidden="true" />}
                  title="Defesa Empresarial"
                  description="Planejamento jurídico preventivo com foco na conformidade legal e na diminuição da exposição a demandas judiciais."
                />
              </div>
              <div className="snap-start shrink-0 basis-[68%] sm:basis-[42%] md:basis-[26%] lg:basis-[18%]">
                <AuthorityCard
                  icon={<Users className="h-6 w-6" aria-hidden="true" />}
                  title="Direito Sindical"
                  description="Negociações coletivas com a visão estratégica de quem domina os dois lados da mesa."
                />
              </div>
              <div className="snap-start shrink-0 basis-[68%] sm:basis-[42%] md:basis-[26%] lg:basis-[18%]">
                <AuthorityCard
                  icon={<Activity className="h-6 w-6" aria-hidden="true" />}
                  title="Acidentes de Trabalho"
                  description="Busca implacável por indenizações justas em danos ocupacionais."
                />
              </div>
              <div className="snap-start shrink-0 basis-[68%] sm:basis-[42%] md:basis-[26%] lg:basis-[18%]">
                <AuthorityCard
                  icon={<AlertOctagon className="h-6 w-6" aria-hidden="true" />}
                  title="Assédio Moral e Sexual"
                  description="Combate rigoroso e punitivo contra abusos no ambiente corporativo."
                />
              </div>
            </div>
            <button
              onClick={() => modulesRef.current?.scrollBy({ left: modulesRef.current.clientWidth * 0.8, behavior: 'smooth' })}
              className="neon-pulse absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-1.5 sm:p-2 text-[#D4AF37]/60 opacity-0 transition-all duration-300 hover:opacity-100 group-hover:opacity-100 focus:opacity-100 bg-transparent border border-transparent backdrop-blur-sm"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>
        
        <section className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 items-start gap-8 sm:gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] text-center mx-auto w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem]">
                PRESIDENTE SINTTASB/DF | COMISSÃO SINDICAL OAB-TAGUATINGA
              </div>
              <div className="group relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem] overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0B1A30]/60 p-1">
                <div className="relative bg-[#0B1A30]">
                  <img
                    src="/solange.png.png"
                    alt="Solange Bezerra"
                    className="w-full h-auto rounded-xl object-contain transition-all duration-500 ease-out"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(212,175,55,0.15)]"></div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1.5" aria-label="Avaliação 5 de 5">
                <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0s' }} />
                <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.2s' }} />
                <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.4s' }} />
                <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.6s' }} />
                <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.8s' }} />
              </div>
            </div>
            <div className="space-y-5 self-center w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem]">
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-2xl font-bold text-[#D4AF37]">Solange Bezerra</h3>
              <p className="text-[11px] sm:text-xs leading-relaxed text-[#CBD5E1]">
                Com a autoridade de quem preside o SINTTASB/DF e lidera a Comissão de Direito Sindical da OAB-Taguatinga, a Dra. Solange Bezerra não atua apenas na teoria ela está na linha de frente onde as decisões acontecem.
              </p>
              <p className="text-[11px] sm:text-xs leading-relaxed text-[#CBD5E1]">
                Especialista em Direito do Trabalho e Direito Tributário, ela utiliza sua liderança institucional para garantir uma condução jurídica técnica e segura. Onde surgem conflitos complexos, nossa estrutura entrega o planejamento e a fundamentação necessários para proteger seus interesses e seu patrimônio.
              </p>
              <blockquote className="border-l-4 border-[#D4AF37] pl-4 text-white italic text-xs sm:text-sm">
                Justiça exige método, coragem e precisão jurídica — e é assim que atuamos.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <div className="mb-4 grid grid-cols-4 gap-3 sm:gap-4">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span className="text-xs font-semibold text-white">15 Anos na Linha de Frente</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <span className="text-xs font-semibold text-white">+457 Clientes Protegidos</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <span className="text-xs font-semibold text-white">100% Foco no Seu Resultado</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <span className="text-xs font-semibold text-white">24h Plantão para Urgências</span>
                </div>
              </div>
              <button
                onClick={startLeadFlow}
                className="group relative overflow-hidden mt-8 sm:mt-10 mb-3 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#D4AF37] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] bg-[#0B1A30]/50 hover:bg-[#D4AF37] hover:text-[#0B1A30] backdrop-blur-sm"
              >
                <span className="relative z-10 inline-flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
                  Consultar agora
                </span>
                <div className="absolute inset-0 shimmer-overlay"></div>
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Localização</h3>
              <p className="text-sm text-[#CBD5E1]">Venha nos visitar no nosso escritório</p>
            </div>
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#112240] p-6 overflow-hidden">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.1234567890!2d-48.0610733!3d-15.8104084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33b68a0d922d%3A0xd2a2c511ff26c77e!2sSolange%20Bezerra%20Advogada!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Solange Bezerra Advogada"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/place/Solange+Bezerra+Advogada/@-15.810387,-48.0795274,15z/data=!3m1!4b1!4m6!3m5!1s0x935a33b68a0d922d:0xd2a2c511ff26c77e!8m2!3d-15.8104084!4d-48.0610733!16s%2Fg%2F11yxmfdx6l?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">QNA 08, Lt 01, Sala 307 - Taguatinga</span>
                </a>

              </div>
            </div>
          </div>
        </section>
        </main>

        <footer className="w-full border-t border-[#D4AF37]/20">
          <div className="mx-auto flex w_full max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-sm sm:px-6">
            <div className="text-[#CBD5E1] flex flex-wrap items-center justify-center gap-2">
              <a
                href="https://www.google.com/maps/place/Solange+Bezerra+Advogada/@-15.810387,-48.0795274,15z/data=!3m1!4b1!4m6!3m5!1s0x935a33b68a0d922d:0xd2a2c511ff26c77e!8m2!3d-15.8104084!4d-48.0610733!16s%2Fg%2F11yxmfdx6l?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                <span>QNA 08, Lt 01, Sala 307 - Taguatinga/DF</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://wa.me/5561984713926?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20consulta%21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    startLeadFlow()
                  }}
                  className="text-sm cursor-pointer"
                >
                  (61) 98471-3926
                </span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://www.instagram.com/solangebezerra.advogada/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>@SOLANGEBEZERRAADV</span>
              </a>
            </div>
            <div className="text-white/90">© 2026 Solange Bezerra Advocacia. Sigilo Absoluto.</div>
            <div className="mt-1">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-xs text-[#D4AF37] hover:text-white underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors"
              >
                Termos de Uso e Privacidade
              </button>
            </div>
          </div>
        </footer>

        

        {isOpen && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-[#020617]/90 backdrop-blur-2xl p-4"
          >
            <div
              ref={modalPanelRef}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto scroll-invisible rounded-2xl border border-white/10 bg-[#0B1A30]/25 backdrop-blur-md backdrop-saturate-150 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"></div>
              <button
                onClick={closeModal}
                className="neon-pulse absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:bg-[#0B1A30]/50 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              {currentStep === 1 && (
                <div key="step1" className="transition-all duration-300">
                  <h2 className="text-lg font-semibold text-white">Qual é a natureza principal do seu caso?</h2>
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {['Trabalhista', 'Defesa Empresarial', 'Sindical', 'Acidente/Assédio'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() =>
                          selectNatureza(opt as 'Trabalhista' | 'Defesa Empresarial' | 'Sindical' | 'Acidente/Assédio')
                        }
                        className="neon-pulse rounded-xl border border-[#D4AF37]/60 px-4 py-3 text-sm font-medium text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div key="step2" className="transition-all duration-300">
                  <h2 className="text-lg font-semibold text-white">Qual é o nível de urgência da situação?</h2>
                  <div className="mt-6 grid grid-cols-1 gap-3">
                    {['Imediata (Risco Atual)', 'Alta (Processo em Andamento)', 'Preventiva (Consultoria)'].map(
                      (opt) => (
                        <button
                          key={opt}
                          onClick={() =>
                            selectUrgencia(
                              opt as
                                | 'Imediata (Risco Atual)'
                                | 'Alta (Processo em Andamento)'
                                | 'Preventiva (Consultoria)',
                            )
                          }
                          className="neon-pulse rounded-xl border border-[#D4AF37]/60 px-4 py-3 text-left text-sm font-medium text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10"
                        >
                          {opt}
                        </button>
                      ),
                    )}
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="neon-pulse text-xs font-medium text-[#CBD5E1] underline decoration-[#D4AF37]/50 underline-offset-4 hover:text-white"
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div key="step3" className="transition-all duration-300">
                  <h2 className="text-lg font-semibold text-white">Para onde devemos enviar a análise?</h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#CBD5E1]">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={formData.nome ?? ''}
                        onChange={(e) => updateField('nome', e.target.value)}
                        placeholder="Seu nome"
                        className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#020617]/70 px-4 py-3 text-sm text-white placeholder-[#CBD5E1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#CBD5E1]">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp ?? ''}
                        onChange={(e) => updateField('whatsapp', e.target.value)}
                        placeholder="(61) 9 0000-0000"
                        className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#020617]/70 px-4 py-3 text-sm text-white placeholder-[#CBD5E1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#CBD5E1]">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email ?? ''}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#020617]/70 px-4 py-3 text-sm text-white placeholder-[#CBD5E1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#CBD5E1]">
                        Observação
                      </label>
                      <textarea
                        value={formData.observacao ?? ''}
                        onChange={(e) => updateField('observacao', e.target.value)}
                        placeholder="Descreva o que fizeram com você ou qual problema a empresa está enfrentando. Vamos avaliar os fatos para ver como podemos intervir e resolver isso."
                        rows={4}
                        className="w-full resize-y rounded-xl border border-[#D4AF37]/30 bg-[#020617]/70 px-4 py-3 text-sm text-white placeholder-[#CBD5E1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="neon-pulse rounded-xl border border-[#D4AF37]/60 px-4 py-2 text-sm font-medium text-[#D4AF37] hover:bg-[#D4AF37]/10"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={submitFinal}
                      className="neon-pulse inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D4AF37] bg-[#112240] px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#112240]/90 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      Acionar a Doutora Agora
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {isTermsOpen && (
          <div
            ref={termsModalRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            role="dialog"
            aria-modal="true"
            aria-labelledby="termos-title"
            onClick={() => setIsTermsOpen(false)}
          >
            <div
              ref={termsPanelRef}
              className="relative mx-4 w-full max-w-2xl rounded-2xl bg-[#0B1A30] text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsTermsOpen(false)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-20 rounded-md border border-[#D4AF37] px-3 py-1 text-sm font-semibold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0B1A30]"
              >
                Fechar
              </button>
              <div className="relative z-0 px-6 py-8 sm:px-8 rounded-2xl bg-[#0B1A30]/35 backdrop-blur-md ring-1 ring-white/10">
                <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"></div>
                <h2 id="termos-title" className="text-xl font-bold tracking-wide text-[#D4AF37]">
                  Termos de Uso e Política de Privacidade
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-6 text-white/90">
                  <h3 className="mt-2 text-base font-semibold text-white">Resumo Didático de Elite</h3>
                  <ol className="list-decimal space-y-3 pl-5">
                    <li>
                      <span className="font-semibold text-white">Finalidade da Coleta:</span> Os dados fornecidos
                      (Nome, WhatsApp e Síntese do Cenário Fático) destinam-se exclusivamente à análise preliminar de
                      viabilidade jurídica pela equipe de Solange Bezerra Advocacia.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Sigilo Profissional:</span> Todas as informações
                      compartilhadas são protegidas pelo sigilo profissional inerente à advocacia e pelas diretrizes da
                      Lei Geral de Proteção de Dados (LGPD).
                    </li>
                    <li>
                      <span className="font-semibold text-white">Não Estabelecimento de Vínculo:</span> O preenchimento
                      do formulário de diagnóstico estratégico não constitui, por si só, a contratação de serviços
                      advocatícios, servindo apenas como uma etapa de triagem.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Segurança de Dados:</span> Utilizamos protocolos de
                      segurança para garantir que seu relato não seja acessado por terceiros não autorizados.
                    </li>
                  </ol>
                  <p className="pt-2">
                    Ao enviar suas informações, você declara ter lido e concordado com este documento e autoriza o
                    tratamento dos dados para as finalidades indicadas, nos termos da LGPD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
