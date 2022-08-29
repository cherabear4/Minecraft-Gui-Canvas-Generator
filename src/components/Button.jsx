import React from 'react'

function Button(props) {
  return (
    <span className='mx-[1px]'>
        <button onClick={props.action} className='bg-blue-600 p-2 rounded-md text-white active:bg-blue-700'>{props.text}</button>
    </span>
  )
}

export default Button