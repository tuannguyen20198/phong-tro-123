import React, { useState } from 'react'
import { InputReadOnly , InputFromV2, Button } from '../../components'
import anonAvatar from "../../assets/anon-avatar.png"

const EditAccount = () => {
  const [invalidFileds, setInValidFileds ] = useState([]);
  
  return (
    <div className='flex flex-col h-full items-center'>      
      <h1 className='text-3xl w-full text-start font-medium py-4'>
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className='w-3/5 items-center justify-center flex-auto'>
        <div className='py-6 flex flex-col gap-4 w-full'>
        <InputReadOnly direction = 'flex-row' label= 'Mã thành viên'/>
        <InputReadOnly direction = 'flex-row' editPhone label= 'Số điện thoại'
        />
        <InputFromV2 
          setInValidFileds ={setInValidFileds } 
          invalidFileds = {invalidFileds} 
          direction = 'flex-row' 
          label= 'Tên hiển thị'
        />
        <InputFromV2 
          setInValidFileds ={setInValidFileds } 
          invalidFileds = {invalidFileds} 
          label= 'Email'
          direction = 'flex-row' 
        />
        <InputFromV2 
          setInValidFileds ={setInValidFileds } 
          invalidFileds = {invalidFileds} 
          label= 'Zalo'
          direction = 'flex-row' 
        />
        <InputFromV2 
          setInValidFileds ={setInValidFileds } 
          invalidFileds = {invalidFileds} 
          label= 'Facebook'
          direction = 'flex-row' 
        />
        <div className='flex'>
          <label className='w-[16.5%] flex-none' htmlFor="password">Mật khẩu</label>
          <small className='flex-auto h-12 text-blue-500 cursor-pointer'>Đổi mật khẩu</small>
        </div>
        <div className='flex mb-6'>
          <label className='w-[16%] flex-none' htmlFor="avatar">Ảnh đại diện</label>
          <img src={anonAvatar} alt="avatar" className='w-28 h-28 rounded-full object-cover'/>
        </div>
        <Button 
          text='Cập nhật'
          bgColor='bg-blue-600'
          textColor='text-white'
        />
        </div>
      </div>
    </div>
  )
}

export default EditAccount