'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({
  label,
  required = false,
  optional = false,
  options = [],
  value,
  onChange,
  placeholder = 'Select option',
  icon: Icon,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const selectedOption = options.find((opt) => opt === value);

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
          <span>
            {label} {required && <span className="text-rose-500">*</span>}
          </span>
          {optional && <span className="text-[10px] text-slate-400 font-normal">Optional</span>}
        </label>
      )}

      {/* Dropdown Trigger Button */}
      <button suppressHydrationWarning
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full text-xs sm:text-sm bg-slate-50/70 border rounded-xl pl-10 pr-9 py-2.5 text-left transition-all relative flex items-center justify-between select-none ${
          isOpen
            ? 'bg-white border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
            : error
            ? 'border-rose-300 bg-rose-50/20'
            : 'border-slate-200 hover:border-blue-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'
        }`}
      >
        {/* Leading Icon */}
        {Icon && (
          <Icon className={`w-4 h-4 absolute left-3.5 top-3 transition-colors ${
            isOpen ? 'text-blue-600' : 'text-slate-400'
          }`} />
        )}

        {/* Selected text or placeholder */}
        <span className={`truncate block pr-2 ${value ? 'text-slate-900 font-semibold' : 'text-slate-400 font-normal'}`}>
          {value || placeholder}
        </span>

        {/* Custom Chevron Indicator */}
        <ChevronDown
          className={`w-4 h-4 text-slate-400 absolute right-3 top-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>

      {/* Custom Theme Popover Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1.5 py-1.5 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-300/40 backdrop-blur-md overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {options.map((opt, idx) => {
            const isSelected = opt === value;
            return (
              <div
                key={idx}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`px-3.5 py-2.5 text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-blue-50/80 text-blue-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="truncate">{opt}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-blue-600 stroke-[2.5] flex-shrink-0 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
