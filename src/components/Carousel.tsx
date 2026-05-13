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
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CenterModeCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#f5f5f5] py-10">
      {/* Carousel Track */}
      <div className="relative mx-auto flex h-[420px] max-w-7xl items-center justify-center">
        {slides.map((slide, index) => {
          const offset =
            (index - current + slides.length) % slides.length;

          let position = offset;

          // Handle left side looping
          if (position > slides.length / 2) {
            position -= slides.length;
          }

          const isActive = position === 0;

          return (
            <div
              key={slide.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `
                  translateX(${position * 320}px)
                  scale(${isActive ? 1 : 0.82})
                `,
                zIndex: isActive ? 20 : 10 - Math.abs(position),
                opacity: Math.abs(position) > 2 ? 0 : 1,
              }}
            >
              <div
                className={`overflow-hidden rounded-[28px] shadow-2xl transition-all duration-500 ${
                  isActive
                    ? "h-[420px] w-[620px]"
                    : "h-[360px] w-[260px]"
                }`}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
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