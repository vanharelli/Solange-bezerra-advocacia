import type { ReactNode } from 'react'

type AuthorityCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export function AuthorityCard({ icon, title, description }: AuthorityCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0B1A30]/35 backdrop-blur-md backdrop-saturate-150 px-8 py-8 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[20rem] overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center relative">
        <div className="rounded-xl border border-[#D4AF37]/30 p-3 text-[#D4AF37]">
          {icon}
        </div>
        <div className="min-w-0 flex w-full flex-col items-center">
          <div className="text-xs sm:text-sm font-semibold text-white leading-snug text-center">{title}</div>
          <div className="mt-2 text-[11px] sm:text-xs leading-snug text-[#CBD5E1] text-center">{description}</div>
        </div>
      </div>
    </div>
  )
}
