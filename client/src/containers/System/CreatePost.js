import React, { useState } from 'react'
import { Overview, Address } from "../../components"
import { BsCameraFill } from 'react-icons/bs'

const createPost = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [payLoad, setPayLoad] = useState({
    categoryCode:'',
    title:'',
    priceNumber:0,
    areaNumber:0,
    image:'',
    address:'',
    priceCode:'',
    areaCode:'',
    description:'',
    target:'',
    province:'',
  });
  console.log(payLoad)
  return (
    <div className='px-6 gap-4'>
      <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
      <div className='flex gap-4'>
        <div className='py-4 flex flex-col gap-8 flex-auto'>
          <Address payLoad={payLoad} setPayLoad={setPayLoad}/>
          <Overview payLoad={payLoad} setPayLoad={setPayLoad}/>
          <div className='w-full'>
            <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className='w-full'>
              <label className='flex flex-col items-center justify-center boder-gray-400 w-full border-2 h-[200px] my-4 gap-4 border-dashed rounded-md' htmlFor="file">
                <BsCameraFill size={"50px"}/>
                Thêm ảnh
              </label>
              <input hidden type="file" id='file' />
            </div>
          </div>
          <div className='h-[500px]'>
          </div>
          </div>
          <div className='w-[30%] flex-none'>
            maps
          </div>
        </div>
    </div>
  )
}

export default createPost