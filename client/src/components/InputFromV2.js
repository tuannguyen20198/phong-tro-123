import React from 'react'

const InputFromV2 = ({label , unit, value, setValue, name, small,invalidFileds,setInValidFileds}) => {
  return (
    <div>
        <label htmlFor="title">{label}</label>
        <div className='flex items-center'>
            <input 
              type="text" 
              id="title" 
              className={`${unit ? 'rounded-tl-md rounded-bl-lg' :'rounded-md'} border outline-none border-gray-300 p-2 flex-auto`}
              value={value}
              onChange={(e) => setValue(prev => ({...prev, [name]:e.target.value}))}
              invalidFileds={invalidFileds}
              onFocus={() => setInValidFileds([])}
            />
            {unit && <span className='p-2 border rounded-tr-md rounded-br-lg flex flex-none w-16 bg-gray-200 flex items-center justify-center'>{unit}</span>}
        </div>
        {small && <small className='opacity-70 whitespace-nowrap'>{small}</small>}
        <small className='text-red-500 block w-full'>
          {invalidFileds?.some(item => item.name === name) && invalidFileds?.find(item => item.name === name)?.message}
        </small>
    </div>
  )
}

export default InputFromV2
