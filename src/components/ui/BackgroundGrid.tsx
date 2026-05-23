export function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-radial-emerald" />
      <div className="absolute inset-0 bg-radial-amber" />
      <div className="absolute inset-0 technical-grid opacity-70" />
      <div className="absolute inset-0 noise-overlay opacity-[0.07]" />
      <div className="absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-emerald/8 blur-3xl" />
      <div className="absolute bottom-[-22rem] right-[-12rem] h-[42rem] w-[42rem] rounded-full bg-amber/8 blur-3xl" />
    </div>
  )
}
