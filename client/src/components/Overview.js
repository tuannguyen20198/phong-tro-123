import React from 'react'
import { Select, InputReadOnly } from "./"
import { useSelector } from 'react-redux'
import {InputFromV2} from "../components/index"

const targets = [
  {code: 'Nam',value:'Nam'},
  {code: 'Nữ',value:'Nữ'},
]

const Overview = ({payLoad,setPayLoad}) => {
  const {categories} = useSelector(state => state.app)
  const { currentData } = useSelector(state => state.user)
  return (
    <div>
      <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
      <div className='w-full flex flex-col gap-4'>
        <div className='w-1/2'>
          <Select value={payLoad.categoryCode} setValue = {setPayLoad} name ='categoryCode' options={categories} label='Loại chuyên mục'/>
        </div>
        <InputFromV2 value={payLoad.title} setValue={setPayLoad} label='Tiêu đề' name='title'/>
        <div className='flex flex-col gap-2 '>
          <label htmlFor="desc">Nội dung mô tả</label>
          <textarea 
          id="desc" 
          cols="30" rows="10" 
          className='w-full ounded-md border outline-none border-gray-300 p-2'
          value={payLoad.description}
          onChange={(e)=> setPayLoad(prev => ({...prev, description: e.target.value}))}
          >
          </textarea>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <InputReadOnly label='Thông tin liên hệ' value={currentData?.name || currentData?.username} />
          <InputReadOnly label='Điện Thoại' value={currentData?.phone}/>
          <InputFromV2 value={payLoad.priceNumber} setValue={setPayLoad} small ="Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 100000" label='Giá cho thuê' unit='đồng' name="priceNumber"/>
          <InputFromV2 value={payLoad.areaNumber} name="areaNumber" setValue={setPayLoad} label='Diện tích' unit='m2'/>
          <Select value={payLoad.target} setValue = {setPayLoad} name ='target' options={targets} label="Đối tượng cho thuê"/>
        </div>
      </div>
    </div>
  )
}

export default Overview