import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
        <p className="text-gray-300 text-sm">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner