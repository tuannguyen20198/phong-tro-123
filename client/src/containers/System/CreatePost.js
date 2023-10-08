import React, { useState } from 'react'
import { Overview, Address,Loading,Button } from "../../components"
import { apiUploadImages } from '../../services'
import icons from '../../utils/icons'
import { getCodes,getCodesArea } from '../../utils/Common/getCodes'
import { UseSelector, useSelector } from 'react-redux'

const {BsCameraFill,ImBin} = icons

const createPost = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [payLoad, setPayLoad] = useState({
    categoryCode:'',
    title:'',
    priceNumber:0,
    areaNumber:0,
    images:'',
    address:'',
    priceCode:'',
    areaCode:'',
    description:'',
    target:'',
    province:'',
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imagesPreview, setImagesPreview] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setisLoading] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {prices,areas} = useSelector(state => state.app)
  console.log(prices)


  const handleFiles = async(e) => {
    e.stopPropagation()
    setisLoading(true)
    let images = []
    const files = e.target.files
    const formData = new FormData()
    for (let i of files) {
      formData.append('file', i)
      formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
      const response  = await apiUploadImages(formData)
      if (response.status === 200) images = [...images, response.data?.secure_url]
    }
    setisLoading(false)
    setImagesPreview(prev => [...prev,...images])
    setPayLoad(prev => ({...prev,images:[...prev.images, ...images]}))
  }
  
  console.log(payLoad)
  const handleDeleteImage = (image) => {
    setImagesPreview(prev => prev?.filter(item => item !== image))
    setPayLoad(prev => ({
      ...prev,
      images: prev.images?.filter(item => item !== image)
    }))
  }
  const handleSubmit = () => {
    let priceCodeArr = getCodes([+payLoad.priceNumber,+payLoad.priceNumber],prices)
    let priceCode = priceCodeArr[priceCodeArr.length - 1]?.code
    console.log(payLoad)
    console.log(priceCode)
  }
  
  return (
    <div className='px-6 gap-4'>
      <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
      <div className='flex gap-4'>
        <div className='py-4 flex flex-col gap-8 flex-auto'>
          <Address payLoad={payLoad} setPayLoad={setPayLoad}/>
          <Overview payLoad={payLoad} setPayLoad={setPayLoad}/>
          <div className='w-full mb-6'>
            <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className='w-full'>
              <label className='flex flex-col items-center justify-center boder-gray-400 w-full border-2 h-[200px] my-4 gap-4 border-dashed rounded-md' htmlFor="file">
                {isLoading 
                ? <Loading/> 
                : <div className='flex flex-col items-center justify-center'>
                  <BsCameraFill size={"50px"}/>
                  Thêm ảnh
                </div>}
              </label>
              <input onChange={handleFiles} hidden type="file" id='file' multiple/>
              <div className='w-full'>
                <h3 className='font-medium py-4'>Ảnh đã chọn</h3>
                <div className='flex gap-4 items-center'>
                  {imagesPreview?.map(item =>{
                    return(
                      <div key={item} className='relative w-1/3 h-1/3'>
                        <img src={item} alt="preview" className='w-full h-full object-cover rounded-md'/>
                        <span 
                        title='Xóa'
                        onClick={() => handleDeleteImage(item)} 
                        className='absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full'
                        >
                          <ImBin/>
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
            <Button 
              onClick={handleSubmit}
              text='Tạo mới' 
              bgColor="bg-green-600" 
              textColor="text-white"
            />
          </div>
          <div className='w-[30%] flex-none'>
            maps
          </div>
        </div>
    </div>
  )
}

export default createPost