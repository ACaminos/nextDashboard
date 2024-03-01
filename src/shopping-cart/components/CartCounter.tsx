'use client'

import { useState } from "react"

export const CartCounter = () => {

    const [ num, setNum ] = useState(10)

    const sum = () => { setNum( num + 1) }
    const supr = () => { setNum( num - 1) }

  return (
    <>
        <span className="text-9xl">{ num }</span>
        <div className="flex">
            <button className="
                flex
                items-center
                justify-center
                p-2
                rounded-xl
                bg-gray-900
                text-white
                hover:bg=gray-600
                transition-all
                w-[100px]
                mr-2"
                onClick={ supr }> - 1 </button>
                <button className="
                flex
                items-center
                justify-center
                p-2
                rounded-xl
                bg-gray-900
                text-white
                hover:bg=gray-600
                transition-all
                w-[100px]
                mr-2"
                onClick={ sum }> + 1 </button>
        </div>
    </>
  )
}
