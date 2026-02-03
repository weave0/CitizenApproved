'use client'

// Animated glowing icons with futuristic cyber aesthetic

export function GlowingCheckmark() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      {/* Outer glow pulse */}
      <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      {/* Inner container */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7">
            <animate attributeName="stroke-dasharray" from="0 100" to="100 100" dur="0.5s" fill="freeze" />
          </path>
        </svg>
      </div>
    </div>
  )
}

export function GlowingBook() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  )
}

export function GlowingClipboard() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          <rect x="8" y="2" width="8" height="4" rx="1" fill="currentColor" opacity="0.5" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M9 12h6M9 16h6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  )
}

export function GlowingDollar() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-emerald-400/20 to-green-600/20 border border-emerald-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" d="M12 6v12M9 9c0-1 1.5-2 3-2s3 1 3 2-1.5 2-3 2-3 1-3 2 1.5 2 3 2 3-1 3-2">
            <animate attributeName="stroke-dashoffset" from="50" to="0" dur="1s" fill="freeze" />
          </path>
        </svg>
      </div>
    </div>
  )
}

export function GlowingClock() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2">
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  )
}

export function GlowingHourglass() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-orange-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-orange-400/20 to-amber-600/20 border border-orange-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M5 3h14M5 21h14M7 3v4l5 5-5 5v4M17 3v4l-5 5 5 5v4" />
          {/* Animated sand particles */}
          <circle cx="12" cy="12" r="1" fill="currentColor">
            <animate attributeName="cy" values="8;16;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  )
}

export function GlowingMap() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M9 3v15M15 6v15" opacity="0.5" />
          {/* Animated location ping */}
          <circle cx="12" cy="10" r="2" fill="currentColor">
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  )
}

export function GlowingSearch() {
  return (
    <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl opacity-40 group-hover:opacity-70 animate-pulse" />
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2">
            <animate attributeName="r" values="7;8;7" dur="2s" repeatCount="indefinite" />
          </circle>
          <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" d="M16 16l5 5" />
          {/* Scan line effect */}
          <line x1="7" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.5">
            <animate attributeName="y1" values="8;14;8" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="y2" values="8;14;8" dur="1.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    </div>
  )
}

// Hero section - animated 3D scales of justice
export function AnimatedScales() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] animate-pulse animation-delay-1000" />
      
      {/* Main scales SVG */}
      <svg viewBox="0 0 200 200" className="w-64 h-64 relative z-10">
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        
        {/* Central pillar */}
        <rect x="95" y="50" width="10" height="120" fill="url(#scaleGradient)" filter="url(#glow)" rx="2">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
        </rect>
        
        {/* Top beam */}
        <rect x="30" y="45" width="140" height="8" fill="url(#scaleGradient)" filter="url(#glow)" rx="2">
          <animateTransform attributeName="transform" type="rotate" values="-2 100 49;2 100 49;-2 100 49" dur="4s" repeatCount="indefinite" />
        </rect>
        
        {/* Left scale pan */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 -5;0 5;0 -5" dur="4s" repeatCount="indefinite" />
          <path d="M30 55 L20 90 Q35 100 50 90 L40 55" fill="url(#scaleGradient)" opacity="0.6" filter="url(#glow)" />
          <ellipse cx="35" cy="92" rx="18" ry="6" fill="url(#scaleGradient)" opacity="0.4" />
          {/* Chain lines */}
          <line x1="30" y1="53" x2="20" y2="85" stroke="#22d3ee" strokeWidth="2" />
          <line x1="40" y1="53" x2="50" y2="85" stroke="#22d3ee" strokeWidth="2" />
        </g>
        
        {/* Right scale pan */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 5;0 -5;0 5" dur="4s" repeatCount="indefinite" />
          <path d="M160 55 L150 90 Q165 100 180 90 L170 55" fill="url(#scaleGradient)" opacity="0.6" filter="url(#glow)" />
          <ellipse cx="165" cy="92" rx="18" ry="6" fill="url(#scaleGradient)" opacity="0.4" />
          <line x1="160" y1="53" x2="150" y2="85" stroke="#22d3ee" strokeWidth="2" />
          <line x1="170" y1="53" x2="180" y2="85" stroke="#22d3ee" strokeWidth="2" />
        </g>
        
        {/* Base */}
        <rect x="70" y="165" width="60" height="10" fill="url(#scaleGradient)" filter="url(#glow)" rx="3" />
        <rect x="85" y="160" width="30" height="8" fill="url(#scaleGradient)" opacity="0.7" rx="2" />
        
        {/* Floating particles */}
        <circle cx="50" cy="120" r="2" fill="#22d3ee">
          <animate attributeName="cy" values="120;100;120" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="130" r="1.5" fill="#3b82f6">
          <animate attributeName="cy" values="130;110;130" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="140" r="2.5" fill="#22d3ee">
          <animate attributeName="cy" values="140;115;140" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
