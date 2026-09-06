import { services } from "@/data/services";
import type { ServiceItem } from "@/types";

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#f0e4da]/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c4917b]/30 hover:shadow-xl hover:shadow-[#c4917b]/10 sm:p-7 lg:p-8">
      {/* Decorative corner accent */}
      <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-[#fdf2ec] transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-[#f5e0d5]" />

      {/* Icon */}
      <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fdf2ec] to-[#f7e6dc] text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110">
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="relative font-serif text-xl font-bold text-[#3d2c2c] transition-colors group-hover:text-[#c4917b] lg:text-[1.35rem]">
        {service.title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-[#7a6960] lg:text-[0.925rem]">
        {service.description}
      </p>

      {/* Price */}
      <div className="relative mt-5 flex items-center justify-between">
        <span className="rounded-full bg-[#fdf2ec] px-4 py-2 text-sm font-bold text-[#c4917b]">
          {service.price}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ddd5] text-[#c4917b] opacity-0 transition-all duration-300 group-hover:opacity-100">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="layanan" className="bg-white py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-[#fdf8f5] px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b]">
            💅 LAYANAN KAMI
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#3d2c2c] sm:text-4xl lg:text-5xl">
            Layanan{" "}
            <span className="bg-gradient-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">
              &amp; Harga
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#7a6960] sm:text-lg">
            Pilihan perawatan kuku terlengkap dengan harga terjangkau, dikerjakan
            oleh nail artist berpengalaman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-7">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
