import Image from "next/image";
import Carousel from "@/components/carousel";
const AboutPage = () => {
    const stats = [
        {
            number: "20+",
            label: "Years Experience",
            color: "text-orange-500"
        },
        {
            number: "100+",
            label: "Happy Customer",
            color: "text-orange-500"
        },
        {
            number: "15+",
            label: "Choice of Services",
            color: "text-orange-500"
        },
        {
            number: "10+",
            label: "Professional Guides",
            color: "text-orange-500"
        }
    ];
    const content = [
        {
            icon: "/Vector.svg",
            title: "Complete Packages For All Your Wishes"
        },
        {
            icon: "/Vector2.svg",
            title: "Over 30 Years Of Experience"
        },
        {
            icon: "/Vector3.svg",
            title: "Expert Guides For You"
        },
        {
            icon: "/icon_best price.svg",
            title: "Guaranteed fun at the best price"
        }
    ];
    return (
        <>
            <section className="relative w-full">
                <div className="h-screen">
                    <Image src="/hero2.png" alt="About Us" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Our team cares about your full relax</h1>
                    <p className="text-white mt-4 max-w-prose text-center font-bold">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    <button className="mt-8 px-4 py-2 bg-none border border-white rounded-3xl text-white">View our Tour Packages</button>
                </div>
            </section>

            <section className="relative flex justify-center flex-row items-center mx-auto mt-8 gap-8">
                <Image src="/town.png" alt="About us" width={400} height={316} />
                <article className="mt-4 max-w-2xl">
                    <span className="font-semibold text-[#333333] opacity-60" > WELCOME TO OUR SITE!</span>
                    <h3 className="font-extrabold text-3xl">We are the best company for your visit</h3>
                    <p className=" text-gray-600 leading-8">After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>
                    <div className="grid grid-cols-4 gap-6 mt-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            <section className="relative mt-16 mb-16">
                <div className="w-full h-[320px] bg-orange-300 grid grid-cols-4 gap-6 justify-items-center items-center">
                    {content.map((item, index) => (
                        <div key={index} className="h-[160px] w-[240px] flex items-center text-center flex-col bg-orange-200 rounded-2xl p-4">
                            <Image src={item.icon} alt={item.title} width={50} height={50} className="text-orange-300" />
                            <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
export default AboutPage;