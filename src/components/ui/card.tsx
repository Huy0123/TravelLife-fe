import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Users } from "lucide-react";
interface CardProps {
    img: string;
    title: string;
    price: string;
    schedule: string;
    group: string;
    desc: string;
    className?: string;
}
interface SlideCardProps {
    slide: CardProps;
    className?: string;
}
const Card = ({ slide, className }: SlideCardProps) => {
    return (
        <Link href={`/tour-packages/${slide.title}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <article className={` ${className}`}>
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
                    <span className="text-lg font-medium text-orange-400 pt-2 inline-block hover:text-orange-600 transition-colors">
                        Read More →
                    </span>
                </div>

            </article>
        </Link>
    );
}

export default Card;