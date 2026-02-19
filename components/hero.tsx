export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-6 text-center">
      <div className="max-w-3xl">
        <h1 className="font-serif text-6xl tracking-[0.2em] text-[#F5F4F0] md:text-8xl lg:text-9xl">
          GRAVITAS
        </h1>
        <p className="mt-6 text-sm tracking-[0.3em] uppercase text-[#C4B9A8]">
          presence without performance
        </p>
        <a
          href="#collection"
          className="mt-16 inline-block border border-[#F5F4F0]/20 px-8 py-3 text-xs tracking-[0.2em] uppercase text-[#F5F4F0]/70 transition-all duration-500 hover:border-[#F5F4F0]/50 hover:text-[#F5F4F0]"
        >
          Explore the Collection
        </a>
      </div>
    </section>
  )
}
