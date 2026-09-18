export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#f0e4da]/60 bg-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <span className="text-2xl font-serif font-bold tracking-tight text-white">
              Nanails{" "}
              <span className="font-light italic text-[#d4a592]">Art</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#b8a99e]">
              Salon nail art premium yang mengutamakan kualitas, keindahan, dan
              kenyamanan Anda. Setiap kuku adalah mahakarya.
            </p>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-serif text-base font-bold text-white sm:text-lg">
              Jam Operasional
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-center gap-3 text-sm text-[#b8a99e]">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs">
                  🕐
                </span>
                <span>
                  <span className="font-medium text-[#e8ddd5]">
                    Senin – Jumat:
                  </span>{" "}
                  10.00 – 21.00
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#b8a99e]">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs">
                  🕐
                </span>
                <span>
                  <span className="font-medium text-[#e8ddd5]">
                    Sabtu – Minggu:
                  </span>{" "}
                  10.00 – 20.00
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-white sm:text-lg">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#b8a99e]">
              {[
                { label: "Layanan", href: "#layanan" },
                { label: "Galeri", href: "#galeri" },
                { label: "Kontak", href: "#kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#b8a99e] transition-colors duration-200 hover:text-[#d4a592]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-[#8a7b72]">
            &copy; {currentYear} Nanails Art. All rights reserved.
          </p>
          <p className="text-xs text-[#8a7b72]">
            Pemilik dan pengelola: <span className="font-medium text-[#d4a592]">Ratna Sintya Dewi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
