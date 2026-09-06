export function LocationContact() {
  return (
    <section
      id="kontak"
      className="bg-gradient-to-b from-[#faf4ef] to-[#f5ede7] py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b]">
            📍 LOKASI &amp; KONTAK
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#3d2c2c] sm:text-4xl lg:text-5xl">
            Kunjungi{" "}
            <span className="bg-gradient-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">
              Studio Kami
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#7a6960] sm:text-lg">
            Kami siap menyambut Anda di studio kami yang nyaman dan elegan.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="group flex gap-4 rounded-2xl border border-[#f0e4da]/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#c4917b]/20 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fdf2ec] to-[#f7e6dc] text-xl transition-transform duration-300 group-hover:scale-110">
                📍
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#3d2c2c] sm:text-lg">
                  Alamat
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#7a6960]">
                  Jl. Mawar Indah No. 27, Blok C-15
                  <br />
                  Kelapa Gading, Jakarta Utara 14240
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-[#f0e4da]/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#c4917b]/20 hover:shadow-md sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fdf2ec] to-[#f7e6dc] text-xl transition-transform duration-300 group-hover:scale-110">
                💬
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#3d2c2c] sm:text-lg">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm text-[#7a6960] transition-colors group-hover:text-[#c4917b]">
                  +62 812-3456-7890
                </p>
                <p className="mt-0.5 text-xs text-[#a09088]">
                  Klik untuk chat langsung
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@nanailsart.com"
              className="group flex gap-4 rounded-2xl border border-[#f0e4da]/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#c4917b]/20 hover:shadow-md sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fdf2ec] to-[#f7e6dc] text-xl transition-transform duration-300 group-hover:scale-110">
                ✉️
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#3d2c2c] sm:text-lg">
                  Email
                </h3>
                <p className="mt-1 text-sm text-[#7a6960] transition-colors group-hover:text-[#c4917b]">
                  hello@nanailsart.com
                </p>
              </div>
            </a>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#f0e4da] bg-white shadow-sm transition-all duration-300 hover:border-[#c4917b]/30 hover:shadow-md"
              >
                <svg
                  className="h-5 w-5 text-[#5a4a42] transition-colors group-hover:text-[#c4917b]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#f0e4da] bg-white shadow-sm transition-all duration-300 hover:border-[#c4917b]/30 hover:shadow-md"
              >
                <svg
                  className="h-5 w-5 text-[#5a4a42] transition-colors group-hover:text-[#c4917b]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46 6.28 6.28 0 001.86-4.49V9.38a8.18 8.18 0 004.72 1.5V7.43a4.85 4.85 0 01-1-.74z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#f0e4da] bg-white shadow-sm transition-all duration-300 hover:border-[#c4917b]/30 hover:shadow-md"
              >
                <svg
                  className="h-5 w-5 text-[#5a4a42] transition-colors group-hover:text-[#c4917b]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative overflow-hidden rounded-2xl border border-[#f0e4da]/80 bg-white shadow-sm">
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-[#f5ede7] via-[#fdf8f5] to-[#faf4ef] p-8 text-center md:min-h-[460px]">
              {/* Map illustration */}
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c4917b]/10 text-4xl">
                  🗺️
                </div>
                <div className="absolute -right-1 -top-1 flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-[#c4917b] text-sm text-white shadow-lg">
                  📍
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#3d2c2c]">
                Google Maps
              </h3>
              <p className="mt-2 max-w-xs text-sm text-[#7a6960]">
                Jl. Mawar Indah No. 27, Blok C-15, Kelapa Gading, Jakarta Utara
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c4917b] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#c4917b]/25 transition-all duration-300 hover:bg-[#b07d68] hover:-translate-y-0.5"
              >
                Buka di Google Maps
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

              {/* Decorative dots */}
              <div className="pointer-events-none absolute bottom-6 left-6 grid grid-cols-4 gap-2 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#c4917b]"
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute right-6 top-6 grid grid-cols-4 gap-2 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#c4917b]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
