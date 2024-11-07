import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8" }: LogoProps) {
  return (
    <img 
      src="https://i.imgur.com/H8M0tLi.jpg" 
      alt="Lullaby" 
      className={className}
    />
  );
}