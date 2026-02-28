import { eliteCopy } from '../logic/eliteCopy'

export function EliteFooter() {
  return (
    <footer className="w-full border-t border-[#D4AF37]/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:px-6">
        <div className="text-white/90">{eliteCopy.footerRights}</div>
        <div className="text-[#A1A1AA]">{eliteCopy.footerConfidentiality}</div>
      </div>
    </footer>
  )
}
