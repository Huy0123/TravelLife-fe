"use client";
import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Users } from "lucide-react";

// Types
interface SlideData {
    img: string;
    title: string;
    price: string;
    schedule: string;
    group: string;
    desc: string;
}

interface CarouselProps {
    title?: string;
    slides: SlideData[];
    slidesPerView?: number;
    className?: string;
}

// Navigation Button Component
interface NavButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
    disabled: boolean;
    className?: string;
}

const NavButton = ({ direction, onClick, disabled, className = "" }: NavButtonProps) => {
    const isPrev = direction === 'prev';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${!disabled
                    ? 'bg-orange-400 hover:bg-orange-600 text-white cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points={isPrev ? "15,18 9,12 15,6" : "9,18 15,12 9,6"}></polyline>
            </svg>
        </button>
    );
};

// Slide Card Component
interface SlideCardProps {
    slide: SlideData;
    className?: string;
}

const SlideCard = ({ slide, className = "" }: SlideCardProps) => {
    return (
        <article className={`basis-1/4 flex-shrink-0 px-3 ${className}`}>
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <Image
                    src={slide.img}
                    alt={slide.title}
                    width={330}
                    height={404}
                    className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <h4 className="font-bold text-xl mb-2">{slide.title}</h4>

                    <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-sm text-gray-600">from</span>
                        <span className="font-bold text-2xl text-orange-500">{slide.price}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-orange-500 mb-3">
                        <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            <span>{slide.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{slide.group}</span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">{slide.desc}</p>
                </div>
            </div>
        </article>
    );
};

// Main Carousel Component
const Carousel = ({
    title = "Explore Our Popular Destinations",
    slides,
    slidesPerView = 4,
    className = ""
}: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    // Calculate if we can scroll
    const canScrollPrev = currentSlide > 0;
    const canScrollNext = currentSlide < totalSlides - slidesPerView;

    const handlePrevious = () => {
        if (canScrollPrev) {
            setCurrentSlide(prev => Math.max(0, prev - 1));
        }
    };

    const handleNext = () => {
        if (canScrollNext) {
            setCurrentSlide(prev => Math.min(totalSlides - slidesPerView, prev + 1));
        }
    };

    return (
        <section className={`relative mt-16 ${className}`}>
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Header with navigation */}
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-extrabold text-3xl text-gray-800">{title}</h3>
                    <div className="flex gap-2">
                        <NavButton
                            direction="prev"
                            onClick={handlePrevious}
                            disabled={!canScrollPrev}
                        />
                        <NavButton
                            direction="next"
                            onClick={handleNext}
                            disabled={!canScrollNext}
                        />
                    </div>
                </div>

                {/* Carousel content */}
                <div className="relative overflow-hidden">
                    <div
                        className="-mx-3 flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <SlideCard
                                key={index}
                                slide={slide}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
export type { SlideData, CarouselProps };