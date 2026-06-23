'use client'

import React from 'react'

interface AlertButtonProps {
  message: string
  className?: string
  children: React.ReactNode
}

export default function AlertButton({ message, className, children }: AlertButtonProps) {
  return (
    <button 
      onClick={() => alert(message)} 
      className={className}
    >
      {children}
    </button>
  )
}
