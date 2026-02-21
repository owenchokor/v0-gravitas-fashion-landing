import Image from 'next/image'

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="flex flex-col items-center justify-center bg-[#0A0A0A] px-6 py-20 text-center lg:py-28"
    >
      <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72">
        <Image
          src="/images/gravitas-logo.jpg"
          alt="GRAVITAS logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
        />
      <div className="mt-12 max-w-md space-y-4">
        <p className="font-serif text-sm leading-relaxed tracking-wide text-[#C4B9A8]">
          We build clothes for people who don't need to announce themselves.
        </p>
        <p className="font-serif text-sm leading-relaxed tracking-wide text-[#C4B9A8]">
          We believe style is not what you add, but what you refuse.
        </p>
        <p className="font-serif text-sm leading-relaxed tracking-wide text-[#C4B9A8]">
          Each piece is designed to outlast trends, occasions, and noise.
        </p>
        <p className="font-serif mt-6 text-sm tracking-[0.3em] uppercase text-[#F5F4F0]">
          Wear less. Mean more.
        </p>
      </div>
    </section>
  )
}
