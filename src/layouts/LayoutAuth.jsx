import React from "react"
import { Outlet } from "react-router-dom"

const LayoutAuth = () => {
  return(
    <div className="bg-primary h-screen w-screen flex flex-col">
      <div className="w-full mb-8"> 
        <div className="text-white font-bold m-2 text-3xl flex">
          <h1>Yukii</h1>
        </div>
        <div className="w-ful h-full flex flex-col items-center">
          <div className="bg-white w-[97%] rounded-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutAuth