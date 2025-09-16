"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AuthModal from "./auth-modal";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("Eng");
    const pathname = usePathname();
    const [scroll, setScroll] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        setIsMenuOpen(false);
    };

    const openAuthModal = (mode: 'login' | 'register') => {
        setAuthModalMode(mode);
        setIsAuthModalOpen(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    return (
        <header className={`fixed z-50 w-full transition-all duration-300 ${scroll ? "bg-white shadow-md" : "bg-white/20"}`}>
            <div className="container py-4 flex justify-between items-center  mx-auto px-[48px]">

                <div className="flex items-center relative">
                    <Image src="/Travel Life.png" alt="Logo" width={70} height={70} priority={true} />
                </div>
                <nav className={`absolute hidden md:flex items-center gap-[40px] left-1/2 -translate-x-1/2 font-sans font-semibold text-xl transition-colors ${scroll ? "text-gray-800" : "text-white"}`}>
                    <Link href="/" className={`transition-colors border-b-2 ${pathname === "/" ? "border-orange-400" : "border-transparent"}`}>Home</Link>
                    <Link href="/about" className={`transition-colors border-b-2 ${pathname === "/about" ? "border-orange-400" : "border-transparent"}`}>About Us</Link>
                    <Link href="/tour-packages" className={`transition-colors border-b-2 ${pathname === "/tour-packages" ? "border-orange-400" : "border-transparent"}`}>Tour Packages</Link>
                    <Link href="/contact" className={`transition-colors border-b-2 ${pathname === "/contact" ? "border-orange-400" : "border-transparent"}`}>Contact Us</Link>
                </nav>

                <div className="hidden md:flex gap-2.5 items-center">
                    <div className="relative flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`flex items-center gap-1 px-3 py-2 rounded-md hover:bg-white/10 transition-colors font-sans font-semibold text-xl ${scroll ? "text-gray-600" : "text-white/50"}`}
                        >
                            {language}
                            <Image
                                src="/down arrow.png"
                                alt="Dropdown"
                                width={16}
                                height={16}
                                className={`transition-transform duration-200 ${scroll ? "brightness-0 opacity-60" : "brightness-0 invert opacity-50"} ${isMenuOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {isMenuOpen && (
                            <ul className={`absolute top-full left-0 mt-2 rounded-md shadow-lg border min-w-[80px] z-10 ${scroll ? "bg-white border-gray-200" : "bg-white/20 border-gray-300"}`}>
                                <li
                                    onClick={() => changeLanguage("VN")}
                                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans font-semibold first:rounded-t-md ${scroll ? "text-gray-800" : "text-white"}`}
                                >
                                    VN
                                </li>
                                <li
                                    onClick={() => changeLanguage("EN")}
                                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans font-semibold last:rounded-b-md ${scroll ? "text-gray-800" : "text-white"}`}
                                >
                                    EN
                                </li>
                            </ul>
                        )}
                    </div>
                    <button
                        onClick={() => openAuthModal('login')}
                        className={`font-sans font-semibold text-xl px-3 py-2.5 transition-colors hover:bg-white/10 rounded-md ${scroll ? "text-gray-800 hover:bg-gray-100" : "text-white"}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => openAuthModal('register')}
                        className="text-white font-sans font-semibold text-xl border border-orange-400 rounded-[32px] bg-orange-400 hover:bg-orange-500 px-6 py-2.5 transition-colors"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Auth Modal */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                initialMode={authModalMode}
            />
        </header>
    );
}

export default Header;