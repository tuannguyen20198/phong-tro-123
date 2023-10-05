import React, { memo } from 'react'

const SelectAddress = ({ label , options ,value , setValue , type , reset }) => {
  
  return (
    <div className='flex flex-col gap-2 w-full flex-1'>
        <label className='font-medium' htmlFor="select-address">{label}</label>
        <select value={reset ? '' : value} onChange={(e) => setValue(e.target.value)} id="select-address" className='outline-none border border-gray-300 px-1 w-full p-2 rounded-md'>
            <option value="">{`-- Chọn ${label}--`}</option>
            {options?.map(item => {
                return (
                    <option 
                        key={type === 'province'  ? item?.province_id : item?.district_id} 
                        value={type === 'province'  
                        ? item?.province_id
                        : item?.district_id}
                        >
                            {type === "province" ? item?.province_name: item?.district_name}
                    </option>
                )
            })}
        </select>
    </div>
  )
}

export default memo(SelectAddress)