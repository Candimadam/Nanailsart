export function LocationContact() {
  return (
    <section
      id="kontak"
      className="bg-linear-to-b from-[#faf4ef] to-[#f5ede7] py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b]">
            📍 LOKASI &amp; KONTAK
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Kunjungi{" "}
            <span className="bg-linear-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#fdf2ec] to-[#f7e6dc] text-xl transition-transform duration-300 group-hover:scale-110">
                📍
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-foreground sm:text-lg">
                  Alamat
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#7a6960]">
                  Kp.leuwinanggung rt03 rw05 kecamatan ibun, Tangulun, Majalaya, Kabupaten Bandung, Jawa Barat 40384
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6289678730504"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-[#f0e4da]/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#c4917b]/20 hover:shadow-md sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#fdf2ec] to-[#f7e6dc] text-xl transition-transform duration-300 group-hover:scale-110">
                💬
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-foreground sm:text-lg">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm text-[#7a6960] transition-colors group-hover:text-[#c4917b]">
                  0896-7873-0504
                </p>
                <p className="mt-0.5 text-xs text-[#a09088]">
                  Klik untuk chat langsung
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:nanailsart74@gmail.com"
              className="group flex gap-4 rounded-2xl border border-[#f0e4da]/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#c4917b]/20 hover:shadow-md sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#fdf2ec] to-[#f7e6dc] text-xl transition-transform duration-300 group-hover:scale-110">
                ✉️
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-foreground sm:text-lg">
                  Email
                </h3>
                <p className="mt-1 text-sm text-[#7a6960] transition-colors group-hover:text-[#c4917b]">
                  nanailsart74@gmail.com
                </p>
              </div>
            </a>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/nanailsart02"
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
                href="https://tiktok.com/@nanailsart02"
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
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative overflow-hidden rounded-2xl border border-[#f0e4da]/80 bg-white shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.604578773397!2d107.7602823737131!3d-7.055662069140212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c1b5dd301b21%3A0x1d5a4fe293017ba9!2sNanails%20Art!5e0!3m2!1sid!2sid!4v1789638062917!5m2!1sid!2sid"
              title="Lokasi Nanails Art di Google Maps"
              className="h-90 w-full md:h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
