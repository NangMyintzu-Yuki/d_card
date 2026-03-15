import UploadForm from '@/components/UploadForm'
import React from 'react'

const page = () => {
  return (
     <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold mb-6">Test File Upload</h2>
      <UploadForm/>
      
      
    </main>
  )
}

export default page
