import React from 'react'
import bg from './../images/back2.jpg'

export default function Home() {
  return (
    <div style={{background: `url("${bg}")`}} className="flex flex-col w-3/4 m-auto h-32 justify-center bg-fixed">
      <h1 className="text-center text-3xl">Upward Brewing</h1>
      <p className="text-center">"Take some time and head up" <span className="font-hairline text-sm">- Someone</span></p>
    </div>
  )
}