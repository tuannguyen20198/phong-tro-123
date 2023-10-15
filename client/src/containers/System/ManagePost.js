import React ,{useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import * as actions from "../../store/action"
import "moment/locale/vi";
const ManagePost = () => {
  const dispatch = useDispatch()
  const {potsOfCurrent} = useSelector(state => state.post)
  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin())
  },[])

  const checkStatus = (datetime) => {
    let todaySeconds = new Date().getTime()
    let expireDayInSecods = datetime.getTime()

    return todaySeconds >= expireDayInSecods ? 'Đang hoạt động' : 'Đã hết hẹn'
  }
  
  return (
    <div className='flex flex-col gap-6'>
        <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
            <h1 className='text-3xl font-medium'>Quản lý tin đăng</h1>
            <select className='outline-none border p-2 border-gray-200 rounded-md'>
                <option value="">Lọc theo trạng thái</option>
            </select>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className='border p-2'>Mã Tin</th>
              <th className='border p-2'>Ảnh đại diện</th>
              <th className='border p-2'>Tiêu đề</th>
              <th className='border p-2'>Giá</th>
              <th className='border p-2'>Ngày bắt đầu</th>
              <th className='border p-2'>Ngày hết hẹn</th>
              <th className='border p-2'>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {!potsOfCurrent 
              ? <tr>
                  <td>aahaha</td>
                </tr>:potsOfCurrent?.map(item => {
                  return(
                    <tr key={item.id}>
                      <td className='border text-center p-2'>{item?.overviews?.code}</td>
                      <td className='border flex items-center justify-center p-2'>
                        <img src={JSON.parse(item?.images?.image)[0] || ''} alt="avatar-post" className='w-10 h-10 object-cover rounded-md'/>
                      </td>
                      <td className='border text-center p-2'>{item?.title}</td>
                      <td className='border text-center p-2'>{item?.attributes?.price}</td>
                      <td className='border text-center p-2'>{item?.overviews?.created}</td>
                      <td className='border text-center p-2'>{item?.overviews?.expire}</td>
                      <td className='border text-center p-2'>{checkStatus(new Date(item?.overviews?.expire?.split(' ')[3]))}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ManagePost