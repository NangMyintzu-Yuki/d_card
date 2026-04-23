import React from 'react'

const TiktokIcon = () => {
  return (
    <svg 
      width="30" 
      height="30" 
      viewBox="0 0 30 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Optional: Background Circle/Square to match the "rounded" look */}
      <rect width="30" height="30" rx="8" fill="transparent" /> 
      
      {/* The TikTok Path scaled and centered to fit a 30x30 frame */}
      <path 
        d="M21.3407 4.5H17.2848V20.8478C17.2848 22.7957 15.7291 24.3957 13.7932 24.3957C11.8573 24.3957 10.3017 22.7957 10.3017 20.8478C10.3017 18.9348 11.8227 17.3695 13.6895 17.3V13.1957C9.57572 13.2652 6.25702 16.6391 6.25702 20.8478C6.25702 25.0913 9.64486 28.5 13.8279 28.5C18.0108 28.5 21.3986 25.0565 21.3986 20.8478V12.4652C22.9197 13.5783 24.7865 14.2391 26.757 14.2739V10.1696C23.7148 10.0652 21.3407 7.56087 21.3407 4.5Z" 
        fill="currentColor" 
      />
    </svg>
  )
}

export default TiktokIcon