import Image from "next/image";

const reviewSlots = [
    { label: "Screenshot review 1", image: "/images/review1.jpeg" },
    { label: "Screenshot review 2", image: "/images/review2.jpeg" },
    { label: "Screenshot review 3", image: "/images/review3.jpeg" },
    { label: "Screenshot review 4", image: "/images/review4.jpeg" },
];

export function Reviews() {
    return (
        <section
            id="review"
            className="bg-linear-to-b from-[#faf4ef] via-white/80 to-[#faf4ef] py-20 sm:py-24 md:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8ddd5] bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wider text-[#c4917b]">
                        💬 REVIEW PELANGGAN
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Kata <span className="bg-linear-to-r from-[#c4917b] to-[#d4a592] bg-clip-text text-transparent">Mereka</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[#7a6960] sm:text-lg">
                        Lihat pengalaman pelanggan Nanails Art melalui review yang mereka bagikan.
                    </p>
                </div>

                <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
                    {reviewSlots.map((slot) => (
                        <div
                            key={slot.label}
                            className="relative aspect-4/5 w-full max-w-55 overflow-hidden rounded-2xl bg-transparent sm:max-w-57.5 lg:max-w-60"
                        >
                            <Image
                                src={slot.image}
                                alt={slot.label}
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 220px, (max-width: 1024px) 230px, 240px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
