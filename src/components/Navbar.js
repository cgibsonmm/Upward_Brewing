import React from 'react'

export default function Navbar() {
  const links = ["About", "What's Pouring", "Location", "Food"]
  return (
      <nav className="bg-gray-100 flex h-20 items-center shadow-lg">
        <h1 className="text-5xl font-semibold p-3 uppercase font-funny font-bold text-blue-500">
          Upward Brewing
        </h1>
        <ul className="flex ml-auto">
          {links.map((link, index)=>(
            <a className="p-2 uppercase">{link}</a>
          ))}
        </ul>
      </nav>
  )
}
