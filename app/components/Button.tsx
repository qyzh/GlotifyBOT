import React from 'react';
import { animate } from 'motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
}

export default function Button({
  href,
  children,
  className,
  onClick,
  variant = 'default',
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded font-mono transition-colors";
  
  const variants = {
    default: "bg-white text-black hover:bg-black hover:text-white border border-white/20 hover:border-white/50",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/5"
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    animate(e.currentTarget, { scale: 1.05 }, { duration: 0.2 });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    animate(e.currentTarget, { scale: 1 }, { duration: 0.2 });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    animate(e.currentTarget, { scale: 0.95 }, { duration: 0.1 });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    animate(e.currentTarget, { scale: 1 }, { duration: 0.1 });
  };

  const buttonContent = (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href} className="text-black hover:text-white transition-colors">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
} 