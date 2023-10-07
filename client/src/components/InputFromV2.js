import React from 'react'

const InputFromV2 = ({label , unit}) => {
  return (
    <div>
        <label htmlFor="title">{label}</label>
        <div className='flex items-center'>
            <input type="text" id="title" className={`${unit ? 'rounded-tl-md rounded-bl-lg' :'rounded-md'} border outline-none border-gray-300 p-2 flex-auto`}/>
            {unit && <span className='p-2 border rounded-tr-md rounded-br-lg flex flex-none w-16 bg-gray-200 flex items-center justify-center'>{unit}</span>}
        </div>
    </div>
  )
}

export default InputFromV2
