import React from 'react'
import "./Screen.css"

const Screen = ({algebraicPhrase,phrase}) => {
  return (
    <ul className='screen list-unstyled px-1 py-2 text-end mb-3'>
    <li className='fs-4 text-light overflow-hidden'>{phrase}</li>
    <li className='fs-5 text-light text-opacity-75 pe-1'>{algebraicPhrase}</li>
    </ul>
  )
}

export default Screen