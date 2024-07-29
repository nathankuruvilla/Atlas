import React from 'react'

interface Props {
    children?: React.ReactNode;
  }

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="h-16 px-14 text-xl bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-2 border border-white-500 hover:border-transparent rounded-full">
        {children}
    </button>
  )
}

export default Button
