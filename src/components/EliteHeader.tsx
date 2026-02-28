import { eliteCopy } from '../logic/eliteCopy'

export function EliteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <div className="text-sm font-medium tracking-wide text-white sm:text-base">
          {eliteCopy.headerTitle}
        </div>
        <button
          type="button"
          className="rounded-full border border-[#D4AF37]/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label={eliteCopy.urgentLabel}
        >
          {eliteCopy.urgentLabel}
        </button>
      </div>
    </header>
  )
}
