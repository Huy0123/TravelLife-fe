"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import DatePicker from "./date-picker";
import CustomDropdown from "./custom-dropdown";
import { LandPlot } from "lucide-react";
import { TIME_OPTIONS, TOUR_OPTIONS, TRANSPORT_OPTIONS } from "../constants/dropdownOptions";

const Hero = () => {
    const [tab, setTab] = useState<"public" | "private">("public");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [selectedTour, setSelectedTour] = useState<string>("");
    const [selectedTransport, setSelectedTransport] = useState<string>("");
    const [openDropdown, setOpenDropdown] = useState<'date' | 'time' | 'tour' | 'transport' | null>(null);

    const toggleDropdown = (type: 'date' | 'time' | 'tour' | 'transport') => {
        setOpenDropdown(openDropdown === type ? null : type);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdown-container')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <section className="w-full relative h-screen">
            <div className="inset-0 bg-cover bg-no-repeat">
                <Image src="/hero.png" alt="hero" fill={true} style={{ objectFit: "cover" }} priority={true}></Image>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4">{/* Style comment: px-4 for mobile padding */}
                <div className="mb-8 md:mb-12 text-center space-y-2">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white">Enjoy in the best way!</h1>
                    <p className="text-lg md:text-2xl text-white">Enjoy our services for your trip anytime</p>
                </div>
                <div className="relative p-4 bg-white/20 rounded-2xl shadow-lg max-w-6xl w-full">
                    {/* Tab buttons */}
                    <div className="flex">
                        <button
                            onClick={() => setTab("public")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-tl-2xl font-semibold transition-all ${tab === "public"
                                ? "bg-white text-orange-500"
                                : "bg-white/40 text-white hover:bg-white/60"
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                            </svg>
                            Public Tours
                        </button>
                        <button
                            onClick={() => setTab("private")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-tr-2xl font-semibold transition-all ${tab === "private"
                                ? "bg-white text-orange-500"
                                : "bg-white/40 text-white hover:bg-white/60"
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                            Private Tours
                        </button>
                    </div>

                    {/* Search Form */}
                    <form className="hidden md:flex items-center bg-white rounded-r-2xl rounded-bl-2xl">
                        {/* Date */}
                        <div className="flex-shrink-0 relative">
                            <DatePicker
                                selectedDate={selectedDate}
                                onDateSelect={setSelectedDate}
                                placeholder="Choose Date"
                                isOpen={openDropdown === 'date'}
                                onToggle={() => toggleDropdown('date')}
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-gray-200"></div>
                        </div>

                        {/* Time */}
                        <div className="flex-1 min-w-0 relative">
                            <CustomDropdown
                                value={selectedTime}
                                onChange={setSelectedTime}
                                options={TIME_OPTIONS}
                                placeholder="Choose Time"
                                label="Time"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                    </svg>
                                }
                                isOpen={openDropdown === 'time'}
                                onToggle={() => toggleDropdown('time')}
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-gray-200"></div>
                        </div>

                        {/* Tour */}
                        <div className="flex-1 min-w-0 relative">
                            <CustomDropdown
                                value={selectedTour}
                                onChange={setSelectedTour}
                                options={TOUR_OPTIONS}
                                placeholder="Select Tour"
                                label="Tour"
                                icon={
                                    <LandPlot className="w-4 h-4" />
                                }
                                isOpen={openDropdown === 'tour'}
                                onToggle={() => toggleDropdown('tour')}
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-gray-200"></div>
                        </div>
                        {/* Transportation */}
                        <div className="flex-1 min-w-0 relative">
                            <CustomDropdown
                                value={selectedTransport}
                                onChange={setSelectedTransport}
                                options={TRANSPORT_OPTIONS}
                                placeholder="Select Transportation"
                                label="Transportation"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                    </svg>
                                }
                                isOpen={openDropdown === 'transport'}
                                onToggle={() => toggleDropdown('transport')}
                            />
                        </div>

                        {/* Search Button */}
                        <div className="p-4">
                            <button
                                type="submit"
                                className="w-full bg-[#FA8B02] hover:bg-orange-500 text-white rounded-lg font-semibold transition-colors flex items-center justify-center p-6"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Hero; 