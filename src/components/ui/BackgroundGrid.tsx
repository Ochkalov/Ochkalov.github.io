export function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0 bg-radial-emerald" />
      <div className="absolute inset-0 bg-radial-amber" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_16%,rgba(94,234,212,0.075),transparent_32rem)]" />
      <div className="absolute inset-0 technical-grid animated-grid opacity-65" />
      <div className="hud-background-traces absolute inset-0 opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,10,0.04),rgba(5,8,10,0.88)_82%)]" />
      <div className="absolute inset-0 noise-overlay opacity-[0.07]" />
      <div className="absolute left-1/2 top-[-18rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-emerald/8 blur-3xl" />
      <div className="absolute bottom-[-22rem] right-[-12rem] h-[42rem] w-[42rem] rounded-full bg-amber/8 blur-3xl" />
    </div>
  )
}
