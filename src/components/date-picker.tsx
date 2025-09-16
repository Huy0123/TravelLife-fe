"use client"
import { useState } from "react";
import Image from "next/image";
interface DatePickerProps {
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
    placeholder?: string;
    isOpen?: boolean;
    onToggle?: () => void;
}
const DatePicker = ({ selectedDate, onDateSelect, placeholder = "Choose Date", isOpen = false, onToggle }: DatePickerProps) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const getDaysInMonth = () => {
        return new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    };
    const getStartDay = () => {
        const start = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
        return start === 0 ? 6 : start - 1;
    }
    const handleDateSelect = (selectedDate: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate);
        onDateSelect(newDate);
        if (onToggle) onToggle(); // Close the dropdown
    };
    const weekdays = [
        { id: "Su", label: "S" },
        { id: "Mo", label: "M" },
        { id: "Tu", label: "T" },
        { id: "We", label: "W" },
        { id: "Th", label: "T" },
        { id: "Fr", label: "F" },
        { id: "Sa", label: "S" },
    ];
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US',
            {
                month: 'short',
                day: "numeric",
                year: 'numeric'
            }
        )
    };
    return (
        <div className="dropdown-container p-4 relative">
            <div className="flex items-center gap-2 text-gray-600">
                <Image
                    src="/calendar.svg"
                    alt="calendar"
                    className="filter brightness-0 saturate-100 opacity-60"
                    width={24}
                    height={24}
                />
                <span className="font-semibold text-[#333333] text-lg font-sans">Date</span>
            </div>

            <div className="relative">
                <button
                    type="button"
                    onClick={onToggle}
                    className="flex items-center justify-between gap-5 w-full p-3 bg-white "
                >
                    <span className={`font-medium text-lg font-sans ${selectedDate ? 'text-black' : 'text-black/50'}`}>
                        {selectedDate ? formatDate(selectedDate) : placeholder}
                    </span>
                    <Image
                        src="/down arrow.png"
                        alt="arrow"
                        className={`filter brightness-0 saturate-100 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        width={16}
                        height={16}
                    />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-80">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                type="button"
                                onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h3 className="font-semibold text-gray-800 text-lg">
                                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Week Days */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {weekdays.map(day => (
                                <div key={day.id} className="text-sm font-medium text-gray-500 text-center p-2">
                                    {day.label}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {/* Empty cells for days before month starts */}
                            {Array.from({ length: getStartDay() }, (_, i) => (
                                <div key={`empty-${i}`} className="p-2"></div>
                            ))}

                            {/* Days of the month */}
                            {Array.from({ length: getDaysInMonth() }, (_, i) => {
                                const day = i + 1;
                                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                const isSelected = selectedDate &&
                                    date.toDateString() === selectedDate.toDateString();
                                const isToday = date.toDateString() === new Date().toDateString();

                                return (
                                    <button
                                        type="button"
                                        key={day}
                                        onClick={() => handleDateSelect(day)}
                                        className={`p-2 text-sm rounded-lg hover:bg-orange-100 transition-colors min-h-[40px] flex items-center justify-center ${isSelected
                                            ? 'bg-orange-500 text-white font-semibold'
                                            : isToday
                                                ? 'border-2 border-orange-500 text-orange-600 font-semibold'
                                                : 'text-gray-700 hover:text-orange-600'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DatePicker;