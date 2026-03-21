import React from 'react'

const FloatingContact = () => {
  return (
     <div className="fixed bottom-6 right-6 z-50">
    <a href="https://www.facebook.com/share/1EEqNicLMs/" 
       className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.503 3.735 7.15V22l3.41-1.873c.87.24 1.79.37 2.855.37 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.076 12.392l-2.583-2.756-5.044 2.756 5.548-5.89 2.65 2.756 4.977-2.756-5.548 5.89z"/>
        </svg>
        
        <span className="absolute right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
            အခုပဲ မှာယူလိုက်ပါ
        </span>
    </a>
</div>
  )
}

export default FloatingContact
