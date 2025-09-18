import Card from "@/components/ui/card";
import { slides } from "@/constants/dropdownOptions";
const TourPackagesPage = () => {
    return (
        <>
            <section className="relative pt-[102px] mx-auto px-4 max-w-screen-xl">
                <div>
                    <h1 className="text-3xl font-extrabold  text-gray-800 mb-8">Tour Packages</h1>
                    <div className="grid grid-cols-4 gap-6">
                        {slides.map((slide, index) => (
                            <Card key={index} slide={slide} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default TourPackagesPage;