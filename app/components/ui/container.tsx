import React from "react"

interface ContainerProps{
    children: React.ReactNode
    background: string
}

const Container: React.FC<ContainerProps> = ({children, background}) => {
  return (
    <div className={` mx-auto max-w-7xl bg-white ${background} `}>
        {children}
    </div>
  )
}

export default Container

