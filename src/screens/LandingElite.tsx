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
    <div className="relative min-h-screen w-full text-white">
      {/* Frost Glassmorphism Overlay (Image background comes from CSS) */}
      <div className="absolute inset-0 z-[-1] bg-[#0B1A30]/65 backdrop-blur-[8px]"></div>

      {/* Existing Content */}
      <div className="relative z-10 min-h-full">
        {!isOpen && <Header onCtaClick={startLeadFlow} />}

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
          <section className="relative flex min-h-[70vh] flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Defesa Jurídica Estratégica para a Preservação de Direitos e Patrimônio
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#CBD5E1] sm:text-lg md:text-xl">
                Unimos a experiência em liderança institucional e a atuação na OAB para entregar uma estrutura de suporte jurídico de alta precisão. Nosso compromisso é com o planejamento rigoroso e a fundamentação necessária para garantir a segurança em cada etapa do seu processo.
              </p>

              <div className="mt-10 flex justify-center sm:justify-start">
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
          
          <section className="mt-16 sm:mt-24 md:mt-32">
            <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] text-center lg:text-left mx-auto lg:mx-0 w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-none">
                  PRESIDENTE SINTTASB/DF | COMISSÃO SINDICAL OAB-TAGUATINGA
                </div>
                <div className="group relative mx-auto lg:mx-0 w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[28rem] overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0B1A30]/60 p-1">
                  <div className="relative bg-[#0B1A30]">
                    <img
                      src="/solange.png"
                      alt="Solange Bezerra"
                      className="w-full h-auto rounded-xl object-contain transition-all duration-500 ease-out hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(212,175,55,0.15)]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-6 lg:mx-0 w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[28rem] mx-auto">
                  <div className="flex items-center justify-center gap-1.5" aria-label="Avaliação 5 de 5">
                    <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0s' }} />
                    <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.2s' }} />
                    <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.4s' }} />
                    <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.6s' }} />
                    <Star className="shimmer-star h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" style={{ animationDelay: '0.8s' }} />
                  </div>
                  
                  {/* Reviews Scroller */}
                  <div className="relative h-[120px] w-full overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md">
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#0B1A30] to-transparent"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-[#0B1A30] to-transparent"></div>
                    
                    <div className="animate-scroll-up flex flex-col gap-4 p-4">
                      {[
                        { name: "Marcos Oliveira", text: "Excelente atendimento, Dra. Solange resolveu meu caso trabalhista com muita precisão." },
                        { name: "Ana Paula Silva", text: "Profissional extremamente competente e dedicada. Recomendo fortemente!" },
                        { name: "Roberto Santos", text: "A melhor defesa empresarial que já contratei. Estratégia impecável." },
                        { name: "Carla Mendes", text: "Transparência e segurança em cada etapa do processo. Nota 10!" },
                        { name: "João Ferreira", text: "Dra. Solange é autoridade no assunto. Senti total confiança no meu caso sindical." }
                      ].concat([
                        { name: "Marcos Oliveira", text: "Excelente atendimento, Dra. Solange resolveu meu caso trabalhista com muita precisão." },
                        { name: "Ana Paula Silva", text: "Profissional extremamente competente e dedicada. Recomendo fortemente!" },
                        { name: "Roberto Santos", text: "A melhor defesa empresarial que já contratei. Estratégia impecável." },
                        { name: "Carla Mendes", text: "Transparência e segurança em cada etapa do processo. Nota 10!" },
                        { name: "João Ferreira", text: "Dra. Solange é autoridade no assunto. Senti total confiança no meu caso sindical." }
                      ]).map((review, idx) => (
                        <div key={idx} className="flex flex-col gap-1 border-b border-[#D4AF37]/10 pb-2 last:border-0">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-2 w-2 fill-[#D4AF37] text-[#D4AF37]" />
                              ))}
                            </div>
                            <span className="text-[10px] font-bold text-white uppercase">{review.name}</span>
                          </div>
                          <p className="text-[11px] leading-tight text-[#CBD5E1] italic">"{review.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:self-start lg:pt-12 w-full max-w-[20rem] sm:max-w-[28rem] lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] text-center lg:text-left">Solange Bezerra</h3>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#CBD5E1] text-center lg:text-left">
                  Com a autoridade de quem preside o SINTTASB/DF e lidera a Comissão de Direito Sindical da OAB-Taguatinga, a Dra. Solange Bezerra não atua apenas na teoria ela está na linha de frente onde as decisões acontecem.
                </p>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#CBD5E1] text-center lg:text-left">
                  Especialista em Direito do Trabalho e Direito Tributário, ela utiliza sua liderança institucional para garantir uma condução jurídica técnica e segura. Onde surgem conflitos complexos, nossa estrutura entrega o planejamento e a fundamentação necessários para proteger seus interesses e seu patrimônio.
                </p>
                <blockquote className="border-l-4 border-[#D4AF37] pl-4 text-white italic text-base sm:text-xl lg:text-2xl text-center lg:text-left lg:border-l-4 lg:pl-6">
                  Justiça exige método, coragem e precisão jurídica — e é assim que atuamos.
                </blockquote>
              </div>
            </div>
          </section>

          <section className="mt-20 sm:mt-32">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12">
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-center transition-transform hover:scale-105">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Scale className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider leading-tight">15 Anos na Linha de Frente</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-center transition-transform hover:scale-105">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider leading-tight">+457 Clientes Protegidos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-center transition-transform hover:scale-105">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Shield className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider leading-tight">100% Foco no Resultado</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#0B1A30]/40 backdrop-blur-md backdrop-saturate-150 px-3 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-center transition-transform hover:scale-105">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Activity className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider leading-tight">Plantão para Urgências</span>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left space-y-6">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">Pronto para a Defesa do seu Direito?</h3>
                    <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
                      Nossa equipe está preparada para analisar seu caso com o rigor técnico e a agilidade que a justiça exige.
                    </p>
                    <button
                      onClick={startLeadFlow}
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#D4AF37] px-8 py-5 text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] bg-[#0B1A30]/50 hover:bg-[#D4AF37] hover:text-[#0B1A30] backdrop-blur-sm w-full sm:w-auto"
                    >
                      <span className="relative z-10 inline-flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
                        Consultar agora
                      </span>
                      <div className="absolute inset-0 shimmer-overlay"></div>
                    </button>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex-1 min-h-[400px] rounded-3xl border border-[#D4AF37]/30 bg-[#112240]/50 p-2 overflow-hidden backdrop-blur-sm shadow-2xl flex">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.1234567890!2d-48.0610733!3d-15.8104084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33b68a0d922d%3A0xd2a2c511ff26c77e!2sSolange%20Bezerra%20Advogada!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                      className="w-full h-full min-h-[400px] rounded-2xl transition-opacity duration-500"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa - Solange Bezerra Advogada"
                    />
                  </div>
                  <div className="text-center flex flex-col items-center gap-4">
                    <a
                      href="https://www.google.com/maps/place/Solange+Bezerra+Advogada/@-15.810387,-48.0795274,15z/data=!3m1!4b1!4m6!3m5!1s0x935a33b68a0d922d:0xd2a2c511ff26c77e!8m2!3d-15.8104084!4d-48.0610733!16s%2Fg%2F11yxmfdx6l?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-white transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-[#D4AF37]/10 group-hover:bg-[#D4AF37] group-hover:text-[#0B1A30] transition-colors">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm sm:text-base font-medium">QNA 08, Lt 01, Sala 307 - Taguatinga</span>
                    </a>

                    <a
                      href="https://www.google.com/maps/place/Solange+Bezerra+Advogada/@-15.8256109,-48.093843,13.5z/data=!4m10!1m2!2m1!1sQNA+08,+Lote+01,+Sala+307+-+Taguatinga+Norte!3m6!1s0x935a33b68a0d922d:0xd2a2c511ff26c77e!8m2!3d-15.8104084!4d-48.0610733!15sCixRTkEgMDgsIExvdGUgMDEsIFNhbGEgMzA3IC0gVGFndWF0aW5nYSBOb3J0ZZIBBmxhd3llcuABAA!16s%2Fg%2F11yxmfdx6l!9m1!1b1?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#0B1A30]/50 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0B1A30] backdrop-blur-sm"
                    >
                      <Star className="h-4 w-4 fill-current" />
                      Avaliar no Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-[#D4AF37]/20">
          <div className="mx-auto flex w_full max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-sm sm:px-6">
            <div className="text-[#CBD5E1] flex flex-wrap items-center justify-center gap-2">
              <a
                  href="https://www.google.com/maps/place/Solange+Bezerra+Advogada/@-15.8256109,-48.093843,13.5z/data=!4m10!1m2!2m1!1sQNA+08,+Lote+01,+Sala+307+-+Taguatinga+Norte!3m6!1s0x935a33b68a0d922d:0xd2a2c511ff26c77e!8m2!3d-15.8104084!4d-48.0610733!15sCixRTkEgMDgsIExvdGUgMDEsIFNhbGEgMzA3IC0gVGFndWF0aW5nYSBOb3J0ZZIBBmxhd3llcuABAA!16s%2Fg%2F11yxmfdx6l!9m1!1b1?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
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
                href="https://www.instagram.com/dra.solangebezerra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>@dra.solangebezerra</span>
              </a>
            </div>
            <div className="text-white/90">© 2026 Solange Bezerra Advocacia. Todos os direitos reservados. Sigilo Absoluto.</div>
            <div className="mt-1">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-xs text-[#D4AF37] hover:text-white underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors"
              >
                Termos de Uso e Privacidade
              </button>
            </div>
            <div className="mt-2 opacity-30 hover:opacity-100 transition-opacity">
              <a
                href="https://www.instagram.com/marketelli_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#CBD5E1] flex items-center gap-1 justify-center"
              >
                Desenvolvido por <span className="font-semibold">@marketelli_</span>
              </a>
            </div>
          </div>
        </footer>

        

        {isOpen && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="fixed inset-0 z-[100] flex h-[100dvh] w-screen items-center justify-center bg-[#020617]/95 backdrop-blur-2xl p-4 sm:p-6"
          >
            <div
              ref={modalPanelRef}
              className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto scroll-invisible rounded-3xl border border-white/10 bg-[#0B1A30]/40 backdrop-blur-xl backdrop-saturate-150 p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"></div>
              <button
                onClick={closeModal}
                className="neon-pulse absolute right-4 top-4 z-[110] inline-flex items-center justify-center rounded-full p-2.5 text-white/80 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#D4AF37] bg-[#0B1A30]/50"
                aria-label="Fechar"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex-1">
                {currentStep === 1 && (
                  <div key="step1" className="transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">Qual é a natureza principal do seu caso?</h2>
                    <p className="mt-2 text-sm text-[#CBD5E1]">Selecione uma opção para começarmos.</p>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {['Trabalhista', 'Defesa Empresarial', 'Sindical', 'Acidente/Assédio'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() =>
                            selectNatureza(opt as 'Trabalhista' | 'Defesa Empresarial' | 'Sindical' | 'Acidente/Assédio')
                          }
                          className="neon-pulse rounded-2xl border border-[#D4AF37]/40 px-5 py-4 text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0B1A30] active:scale-95 text-center"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div key="step2" className="transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">Qual é o nível de urgência da situação?</h2>
                    <p className="mt-2 text-sm text-[#CBD5E1]">Isso nos ajuda a priorizar seu atendimento.</p>
                    <div className="mt-8 grid grid-cols-1 gap-4">
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
                            className="neon-pulse rounded-2xl border border-[#D4AF37]/40 px-5 py-4 text-left text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0B1A30] active:scale-95 flex items-center justify-between group"
                          >
                            <span>{opt}</span>
                            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ),
                      )}
                    </div>
                    <div className="mt-8">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="text-sm font-medium text-[#CBD5E1] flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Voltar
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div key="step3" className="transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">Dados para envio da análise</h2>
                    <p className="mt-2 text-sm text-[#CBD5E1]">Suas informações estão seguras sob sigilo profissional.</p>
                    <div className="mt-8 space-y-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Nome Completo</label>
                        <input
                          type="text"
                          value={formData.nome ?? ''}
                          onChange={(e) => updateField('nome', e.target.value)}
                          placeholder="Ex: João Silva"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.whatsapp ?? ''}
                          onChange={(e) => updateField('whatsapp', e.target.value)}
                          placeholder="(00) 0 0000-0000"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Email (Opcional)</label>
                        <input
                          type="email"
                          value={formData.email ?? ''}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="seu@email.com"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Descrição Breve</label>
                        <textarea
                          value={formData.observacao ?? ''}
                          onChange={(e) => updateField('observacao', e.target.value)}
                          placeholder="Como podemos te ajudar hoje?"
                          rows={3}
                          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3.5 text-sm font-bold text-[#CBD5E1] hover:text-white transition-colors"
                      >
                        Voltar
                      </button>
                      <button
                        onClick={submitFinal}
                        className="w-full sm:flex-1 order-1 sm:order-2 neon-pulse rounded-2xl border-2 border-[#D4AF37] bg-[#D4AF37] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0B1A30] transition-all hover:bg-transparent hover:text-[#D4AF37] active:scale-95"
                      >
                        Enviar para Dra. Solange
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
  );
}
