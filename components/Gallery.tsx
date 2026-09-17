"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";

function GalleryItemCard({ item }: { item: GalleryItem }) {
  return (
    <div
      className="relative aspect-4/5 min-w-0 flex-[0_0_100%] overflow-hidden rounded-2xl bg-[#f5ede7] sm:flex-[0_0_calc((100%-1.5rem)/2)] lg:flex-[0_0_calc((100%-3rem)/3)]"
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(galleryItems.length);
  const [slideStep, setSlideStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const carouselItems = [...galleryItems, ...galleryItems, ...galleryItems];

  useEffect(() => {
    const updateSlideStep = () => {
      const track = trackRef.current;
      const firstSlide = track?.firstElementChild as HTMLElement | null;

      if (!track || !firstSlide) return;

      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      setSlideStep(firstSlide.offsetWidth + gap);
    };

    updateSlideStep();
    const resizeObserver = new ResizeObserver(updateSlideStep);
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const autoplay = window.setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((index) => index + 1);
    }, 4500);

    return () => window.clearInterval(autoplay);
  }, [isPaused]);

  const moveCarousel = (direction: 1 | -1) => {
    setIsTransitioning(true);
    setCurrentIndex((index) => index + direction);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= galleryItems.length * 2 || currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(galleryItems.length);
    }
  };

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

        {/* Infinite gallery carousel */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="overflow-hidden px-1 py-1">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-4 sm:gap-6 ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translate3d(-${currentIndex * slideStep}px, 0, 0)`,
              }}
            >
              {carouselItems.map((item, index) => (
                <GalleryItemCard key={`${index}-${item.id}`} item={item} />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Lihat karya sebelumnya"
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#5a4a42] shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white sm:-left-5"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="Lihat karya berikutnya"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#5a4a42] shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white sm:-right-5"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
