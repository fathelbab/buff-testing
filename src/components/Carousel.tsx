import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(1);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-[#f4f4f4] py-5">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-4 overflow-hidden px-4">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Slides */}
        <div className="flex w-full items-center justify-center gap-5">
          {slides.map((slide, index) => {
            const isCenter = index === current;

            return (
              <div
                key={slide.id}
                className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                  isCenter
                    ? "h-[450px] w-[55%] scale-100 opacity-100"
                    : "h-[450px] w-[22%] scale-90 opacity-80"
                }`}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="h-full w-full object-cover"
                />

                {/* Dark Overlay for side cards */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/10" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-black"
                : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}