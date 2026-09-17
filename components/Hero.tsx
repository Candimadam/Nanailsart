"use client";

import { useRef, useState } from "react";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/image.png"
        aria-label="Video karya nail art Nanails Art"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
      >
        <source src="/Video.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause video" : "Putar video"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-black/55"
        >
          {isPlaying ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          ) : (
            <svg className="ml-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Nyalakan suara video" : "Matikan suara video"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-black/55"
        >
          {isMuted ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5zM19 9l-4 6m0-6l4 6" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-background via-[#faf4ef] to-[#f7efe8]"
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#f5d5c8]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#e8c4b8]/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 pb-16 pt-10 sm:px-8 md:flex-row md:gap-12 md:pb-24 md:pt-10 lg:gap-20 lg:px-10">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c4917b]" />
            PREMIUM NAIL SALON
          </div>

          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-[3.3rem] lg:text-6xl xl:text-7xl">
            Percantik Kuku Anda,{" "}
            <span className="bg-linear-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">
              Tingkatkan Gaya Anda.
            </span>
          </h1>

          {/* Hero image between title and description on mobile */}
          <div className="relative mt-8 mb-4 block w-full md:hidden">
            <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-4xl shadow-2xl shadow-[#c4917b]/20">
              <HeroVideo />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent" />
            </div>
          </div>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#7a6960] sm:text-lg md:mt-6 md:max-w-lg">
            Rasakan pengalaman perawatan kuku premium dan nail art eksklusif yang
            dirancang khusus untuk menonjolkan keindahan dan kepribadian unik
            Anda.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:mt-10">
            <a
              href="https://wa.me/6289678730504?text=Halo%20Nanails%20Art%2C%20saya%20ingin%20reservasi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#c4917b] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#c4917b]/25 transition-all duration-300 hover:bg-[#b07d68] hover:shadow-2xl hover:shadow-[#c4917b]/30 hover:-translate-y-0.5 active:translate-y-0 sm:text-base"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservasi via WhatsApp
            </a>
            <a
              href="#layanan"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#d4c4ba] px-7 py-3.5 text-sm font-semibold text-[#5a4a42] transition-all duration-300 hover:border-[#c4917b] hover:bg-[#c4917b]/5 sm:text-base"
            >
              Lihat Layanan
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

          {/* Trust badges */}
          <div className="mt-10 flex items-center gap-6 text-xs text-[#a09088] md:mt-12">
            <div className="flex items-center gap-1.5">
              <span className="text-base">⭐</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="h-4 w-px bg-[#d4c4ba]" />
            <div className="flex items-center gap-1.5">
              <span className="text-base">💕</span>
              <span className="font-medium">2000+ Klien</span>
            </div>
            <div className="hidden h-4 w-px bg-[#d4c4ba] sm:block" />
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="text-base">✨</span>
              <span className="font-medium">5 Tahun</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative hidden flex-1 md:block">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-4xl shadow-2xl shadow-[#c4917b]/20 md:max-w-lg lg:max-w-xl">
            <HeroVideo />
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48h1440V24c-240 16-480 24-720 24S240 40 0 24v24z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
