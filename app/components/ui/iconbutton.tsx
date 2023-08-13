import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'

interface ButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string
}

const IconButton: React.FC<ButtonProps> = ({onClick, icon, className}) => {
  return (
    <button 
        onClick={onClick}
        className={cn(
            `rounded-full 
            flex items-center j
            ustify-center 
            bg-white border 
            shadow-md 
            p-2 
            hover:scale-110 
            transition`, className
        )}
         >   
         {icon}
        </button>
  )
}

export default IconButton