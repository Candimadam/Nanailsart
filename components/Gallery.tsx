import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";

function GalleryItemCard({ item }: { item: GalleryItem }) {
  return (
    <div
      className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#f5ede7]"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />

      {/* Category badge */}
      <div className="absolute left-4 top-4 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#c4917b] backdrop-blur-sm">
        {item.category}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-sm font-medium leading-relaxed text-white/90 drop-shadow-sm sm:text-base">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="galeri"
      className="bg-linear-to-b from-white via-background to-[#faf4ef] py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b]">
            🎨 PORTOFOLIO
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Galeri{" "}
            <span className="bg-linear-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">
              Hasil Karya
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#7a6960] sm:text-lg">
            Lihat koleksi nail art terbaik kami. Setiap kuku adalah kanvas,
            setiap desain adalah karya seni.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/nanailsart02"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#d4c4ba] px-7 py-3.5 text-sm font-semibold text-[#5a4a42] transition-all duration-300 hover:border-[#c4917b] hover:bg-[#c4917b]/5"
          >
            Lihat Lebih Banyak di Instagram
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
}
