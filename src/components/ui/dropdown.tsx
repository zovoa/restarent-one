import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export function Dropdown({ 
  trigger, 
  children, 
  align = 'left', 
  className = '' 
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={`absolute z-10 mt-2 w-56 rounded-md bg-card shadow-lg border border-border animate-in ${
            align === 'left' ? 'left-0' : 'right-0'
          }`}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function DropdownItem({ 
  children, 
  onClick, 
  className = '' 
}: DropdownItemProps) {
  return (
    <div
      className={`block px-4 py-2 text-sm text-foreground hover:bg-muted cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}