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
      </div>
    </section>
  )
}
