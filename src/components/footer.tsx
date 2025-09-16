"use client";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="w-full bg-[#333333]">
            <div className="container mx-auto px-4">
                <div>
                    <Image src="/Travel Life.png" alt="logo" width={120} height={40} priority={true} />
                </div>
                <div className="h-px w-full bg-white/10"></div>
                <div className="grid grid-cols-4 text-white text-lg font-semibold">
                    <div>
                        <h3 className="py-2 font-bold text-xl">Services</h3>
                        <ul className="space-y-2">
                            
                            <li>
                                <Link href={""}>
                                    Bike and Rickshaw rental
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Guided Tours of Lucca
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Guided Bike Tour of Lucca
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Trip In The Tuscan Hills
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Guided Tours of Lucca
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Guided Bike Tour of Lucca
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Trip In The Tuscan Hills
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Transportation With Luxury Cars
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Wine Tours By Bus With Guide
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="py-2 font-bold text-xl">Home</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={"/home"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/about"}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/tour-packages"}>
                                    Tour Packages
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="py-2 font-bold text-xl">Help</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={""}>
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="py-2 font-extrabold text-xl">Contacts</h3>
                        <ul>
                            <li>
                                Piazza Napoleone, Lucca, Tuscany
                            </li>
                            <li>
                                	+39 346 368 5708
                            </li>
                            <li>
                                <Link href={"mailto:info@travel.com"}>
                                    italiainlimo@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-px w-full bg-white/10"></div>
                <div className="text-white text-base py-4 text-center">
                    © 2025 Travel Life. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;