import React, { useState } from 'react'
import { InputReadOnly , InputFromV2, Button } from '../../components'
import anonAvatar from "../../assets/anon-avatar.png"
import { useSelector } from 'react-redux'
import { apiUploadImages, apiUpdateUser } from '../../services'
import validate from '../../utils/Common/validateFileds'

const EditAccount = () => {
  const [invalidFileds, setInValidFileds ] = useState([])
  const { currentData } = useSelector(state => state.user)
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setisLoading] = useState(false)  

  const [payload, setPayload] = useState({
    name: currentData.name || '',
    avatar: currentData?.avatar || '',
    fbUrl: currentData?.fbUrl || '',
    zalo: currentData?.zalo || '',
  });
  
  console.log(currentData)
  const handleSubmit = async() => {
    const response = await apiUpdateUser(payload)
    console.log(response)
  }
  const handleUploadFile = async(e) => {
    const image = e.target.files[0]
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
    const response  = await apiUploadImages(formData)
    if (response.status === 200) {
      setPayload(prev => ({
        ...prev,
        avatar: response?.data.secure_url
      }))
    }
  }
  
  const handleDeleteImage = (image) => {
    setImagesPreview(prev => prev?.filter(item => item !== image))
    setPayload(prev => ({
      ...prev,
      images: prev.images?.filter(item => item !== image)
    }))
  }
  

  return (
    <div className='flex flex-col h-full items-center'>      
      <h1 className='text-3xl w-full text-start font-medium py-4'>
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className='w-3/5 items-center justify-center flex-auto'>
        <div className='py-6 flex flex-col gap-4 w-full'>
        <InputReadOnly value={`#${currentData?.id?.match(/\d+/g)?.join('')?.slice(0, 6)}` || ''} direction = 'flex-row' label= 'Mã thành viên'/>
        <InputReadOnly value={currentData?.phone} direction = 'flex-row' editPhone label= 'Số điện thoại'
        />
        <InputFromV2
          name='name'
          setValue={setPayload}
          direction = 'flex-row'
          value={payload.name} 
          label= 'Tên hiển thị'
        />
        <InputFromV2
          name='zalo'
          setValue={setPayload}
          label= 'Zalo'
          value={payload.zalo} 
          direction = 'flex-row' 
        />
        <InputFromV2
          name='fbUrl'
          setValue={setPayload}
          label= 'Facebook'
          value={payload.fbUrl}
          direction = 'flex-row' 
        />
        <div className='flex'>
          <label className='w-[16.5%] flex-none' htmlFor="password">Mật khẩu</label>
          <small className='flex-auto h-12 text-blue-500 cursor-pointer'>Đổi mật khẩu</small>
        </div>
        <div className='flex mb-6'>
          <label className='w-[16%] flex-none' htmlFor="avatar">Ảnh đại diện</label>
          <div>
            <img src={payload.avatar || anonAvatar} alt='avatar' className='w-28 h-28 rounded-full object-cover'/>
            <input onChange={handleUploadFile} type="file" className='appearance-none my-4' id="avatar"/>
          </div>
        </div>
        <Button 
          text='Cập nhật'
          bgColor='bg-blue-600'
          textColor='text-white'
          onClick={handleSubmit}
        />
        </div>
      </div>
    </div>
  )
}

export default EditAccount