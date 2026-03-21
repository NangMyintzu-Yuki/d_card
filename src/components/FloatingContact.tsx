import React from 'react'

const FloatingContact = () => {
  return (
//     <div className="fixed bottom-6 right-4 z-50 md:right-8">
//     <a href="https://www.facebook.com/share/1GZxsSsxkF" 
//        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-blue-700 transition-all active:scale-95 border-2 border-white/20">
        
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.503 3.735 7.15V22l3.41-1.873c.87.24 1.79.37 2.855.37 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.076 12.392l-2.583-2.756-5.044 2.756 5.548-5.89 2.65 2.756 4.977-2.756-5.548 5.89z"/>
//         </svg>

//         <span className="font-bold text-sm tracking-wide">အခုပဲ မှာယူလိုက်ပါ</span>
//     </a>
// </div>
//     <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden">
//     <div className="flex items-center justify-between gap-4">
//         <div className="text-left">
//             <p className="text-xs text-gray-500">Digital Card စျေးနှုန်း</p>
//             <p className="text-sm font-bold text-gray-900">အမြန်မှာယူရန်</p>
//         </div>
//         <a href="https://www.facebook.com/share/1GZxsSsxkF" 
//            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-bold shadow-md active:bg-blue-700">
//             အခုပဲ မှာယူလိုက်ပါ
//         </a>
//     </div>
// </div>
     <div className="fixed bottom-6 right-6 z-50">
    <a href="https://m.me/100087745375274" 
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
