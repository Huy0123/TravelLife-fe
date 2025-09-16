"use client"
import { useState } from "react";
import Image from "next/image";

interface DropdownOption {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: DropdownOption[];
    placeholder: string;
    label: string;
    icon?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

const CustomDropdown = ({
    value,
    onChange,
    options,
    placeholder,
    label,
    icon,
    isOpen = false,
    onToggle
}: CustomDropdownProps) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggle = () => {
        if (onToggle) {
            onToggle();
        } else {
            setShowDropdown(!showDropdown);
        }
    };

    const handleOptionSelect = (selectedValue: string) => {
        onChange(selectedValue);
        if (onToggle) {
            onToggle(); // Close dropdown
        } else {
            setShowDropdown(false);
        }
    };

    const isDropdownOpen = onToggle ? isOpen : showDropdown;

    return (
        <div className="dropdown-container space-y-2 p-4 relative">
            <div className="flex items-center gap-2 text-gray-600">
                {icon}
                <span className="font-semibold text-[#333333] text-lg font-sans">{label}</span>
            </div>

            <div className="relative">
                <button
                    type="button"
                    onClick={handleToggle}
                    className="flex items-center justify-center gap-5 w-full bg-white "
                >
                    <span className={`font-medium text-lg font-sans ${value ? 'text-black' : 'text-black/50'}`}>
                        {value || placeholder}
                    </span>
                    <Image
                        src="/down arrow.png"
                        alt="arrow"
                        className={`filter brightness-0 saturate-100 opacity-50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        width={16}
                        height={16}
                    />
                </button>

                {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-full max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleOptionSelect(option.value)}
                                className={`w-full text-left p-3 hover:bg-orange-100 transition-colors rounded-lg ${value === option.value
                                    ? 'bg-orange-500 text-white font-semibold'
                                    : 'text-gray-700 hover:text-orange-600'
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomDropdown;