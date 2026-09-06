"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";

function GallerySlide({
  item,
  isActive,
}: {
  item: GalleryItem;
  isActive: boolean;
}) {
  return (
    <div
      className={`relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-2xl bg-[#f5ede7] transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c2c]/60 via-transparent to-transparent" />

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = galleryItems.length;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  return (
    <section
      id="galeri"
      className="bg-gradient-to-b from-white via-[#fdf8f5] to-[#faf4ef] py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b]">
            🎨 PORTOFOLIO
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#3d2c2c] sm:text-4xl lg:text-5xl">
            Galeri{" "}
            <span className="bg-gradient-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">
              Hasil Karya
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#7a6960] sm:text-lg">
            Lihat koleksi nail art terbaik kami. Setiap kuku adalah kanvas,
            setiap desain adalah karya seni.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex gap-4 transition-transform duration-700 ease-out sm:gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% / 3 - ${currentIndex * 16}px))`,
              }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <GallerySlide
                    item={item}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            aria-label="Slide sebelumnya"
            className="absolute -left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8ddd5] bg-white/90 text-[#5a4a42] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#c4917b] hover:bg-white hover:text-[#c4917b] hover:shadow-xl sm:-left-5 md:-left-6"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Slide berikutnya"
            className="absolute -right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8ddd5] bg-white/90 text-[#5a4a42] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#c4917b] hover:bg-white hover:text-[#c4917b] hover:shadow-xl sm:-right-5 md:-right-6"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Lihat slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-8 bg-[#c4917b]"
                    : "w-2.5 bg-[#d4c4ba] hover:bg-[#c4917b]/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View more CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
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
